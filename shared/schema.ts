import { sql } from "drizzle-orm";
import { pgTable, text, varchar, real, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const landMonitoringProjects = pgTable("land_monitoring_projects", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  location: text("location").notNull(),
  latitude: real("latitude").notNull(),
  longitude: real("longitude").notNull(),
  areaHectares: real("area_hectares").notNull(),
  degradationLevel: text("degradation_level").notNull(),
  ndviScore: real("ndvi_score"),
  soilMoisture: real("soil_moisture"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const aiAnalysis = pgTable("ai_analysis", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  projectId: varchar("project_id").notNull(),
  analysisType: text("analysis_type").notNull(),
  findings: jsonb("findings").notNull(),
  recommendations: jsonb("recommendations").notNull(),
  confidenceScore: real("confidence_score").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertProjectSchema = createInsertSchema(landMonitoringProjects).omit({
  id: true,
  createdAt: true,
});

export const insertAnalysisSchema = createInsertSchema(aiAnalysis).omit({
  id: true,
  createdAt: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type LandProject = typeof landMonitoringProjects.$inferSelect;
export type InsertProject = z.infer<typeof insertProjectSchema>;
export type AIAnalysis = typeof aiAnalysis.$inferSelect;
export type InsertAnalysis = z.infer<typeof insertAnalysisSchema>;

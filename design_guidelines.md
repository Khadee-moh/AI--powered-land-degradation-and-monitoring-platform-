# Design Guidelines: TerraSense AI - Land Degradation Monitoring Platform

## Design Approach
**Selected System**: Material Design with Environmental Sustainability Theming
**Justification**: This is a data-heavy, utility-focused application requiring clarity, consistency, and professional credibility. Material Design provides excellent patterns for dashboards, data visualization, and complex interfaces while allowing environmental color customization.

## Core Design Principles
1. **Data Clarity First**: Every design decision prioritizes readability and actionable insights
2. **Environmental Trust**: Color palette and imagery evoke nature, sustainability, and scientific credibility
3. **Professional Authority**: Interface inspires confidence among policymakers, scientists, and land managers
4. **Scalable Complexity**: Progressive disclosure of detailed data without overwhelming users

## Color Palette

**Dark Mode Primary** (default theme):
- Background Base: 220 15% 8%
- Surface Elevated: 220 12% 12%
- Primary Green: 142 76% 45% (vibrant, eco-focused)
- Warning Orange: 25 95% 53% (degradation alerts)
- Success Teal: 174 72% 56% (healthy zones)
- Error Red: 0 84% 60% (critical areas)
- Text Primary: 0 0% 98%
- Text Secondary: 0 0% 70%

**Light Mode**:
- Background: 0 0% 98%
- Surface: 0 0% 100%
- Primary Green: 142 65% 42%
- Use same accent colors with adjusted lightness for contrast

**Data Visualization Colors**:
- NDVI Scale: Red (140 85% 45%) → Yellow (45 95% 60%) → Green (120 65% 45%)
- Degradation Severity: Green → Yellow → Orange → Red gradient
- Soil Moisture: Blue (210 85% 55%) scale from light to dark

## Typography

**Font Stack**:
- Primary: Inter (via Google Fonts) - clean, professional, excellent readability
- Monospace: JetBrains Mono - for data tables and technical metrics

**Hierarchy**:
- Page Headers: text-4xl font-bold (36px)
- Section Headers: text-2xl font-semibold (24px)
- Card Titles: text-lg font-medium (18px)
- Body Text: text-base (16px)
- Captions/Labels: text-sm text-gray-400 (14px)
- Data Values: text-xl font-semibold (20px)

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 24
- Component padding: p-6 or p-8
- Section spacing: space-y-8 or space-y-12
- Card gaps: gap-6
- Page margins: px-4 md:px-8 lg:px-12

**Grid System**:
- Dashboard: 12-column grid with gap-6
- Map View: Full-width with sidebar (aside: w-96)
- Data Cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4

## Component Library

**Navigation**:
- Top navbar with logo, main navigation, user profile/settings
- Sidebar navigation for dashboard sections (collapsible on mobile)
- Breadcrumb trail for deep navigation

**Core UI Elements**:
- Buttons: Rounded (rounded-lg), primary uses green, secondary uses outline variant
- Cards: Elevated with subtle shadow, rounded-xl, dark surface background
- Input Fields: Outlined style, rounded-md, focus ring in primary green
- Dropdowns/Selects: Material-style with clear labels above

**GIS/Map Components**:
- Interactive map viewport: Full-height with z-layered controls
- Map controls: Floating controls (top-right) with backdrop-blur
- Layer toggles: Compact switch group with icons
- Legend: Bottom-left floating card with color scales

**Data Visualization**:
- Charts: Use Chart.js or Recharts with dark theme
- Metric Cards: Large numbers with trend indicators (↑↓ arrows)
- Progress Bars: Linear with gradient fills showing health status
- Heatmaps: Grid-based with color intensity mapping

**AI Analysis Display**:
- Analysis Results: Card with Claude AI badge, structured insights with bullet points
- Confidence Scores: Circular progress indicators
- Recommendations: Numbered list with action icons

**Reporting**:
- Report Preview: Document-style card with sections
- Download Buttons: Prominent with PDF icon
- Share Functions: Social/email integration buttons

## Landing Page Design

**Hero Section** (h-screen):
- Split layout: 60% satellite/drone imagery of land (degraded vs restored), 40% headline + CTA
- Headline: "AI-Powered Solutions for a Greener Planet"
- Subheadline: Focus on tangible impact metrics
- Primary CTA: "Launch Platform" (large, green)
- Background: Subtle animated gradient mesh in earth tones

**Problem Statement Section**:
- 2-column grid: Statistics on left (large numbers with icons), imagery on right
- Use actual land degradation data/stats
- Dark card backgrounds with green accent borders

**Features Grid** (3 columns on desktop):
- Icon + Title + Description cards
- Features: AI Monitoring, Soil Analysis, Predictive Analytics, Intervention Planning
- Hover effect: Subtle lift with green glow

**Technology Stack Section**:
- Logo grid showing Supabase, Claude AI, GIS integrations
- Brief descriptions of how each powers the platform

**Impact Visualization**:
- Before/After slider component showing land restoration
- Interactive map preview with sample degradation data
- Metrics dashboard preview

**CTA Section**:
- Centered with generous whitespace
- Strong headline about creating impact
- Demo request or platform access button

## Images

**Hero Image**: Large satellite/aerial view showing contrast between degraded land (brown, sparse) and restored/healthy land (green, lush). Should convey environmental urgency and hope. Place as background with overlay gradient for text readability.

**Problem Section Images**: Cracked, dry soil closeup; deforested area; erosion patterns. These should evoke concern but not despair.

**Solution Section Images**: Reforestation drone shot; healthy soil with visible root systems; farmers using sustainable practices; vibrant green landscapes.

**Dashboard Screenshots**: Mockups showing the actual platform interface with colorful data visualizations, maps with overlay data, and AI analysis results.

## Dashboard Interface

**Main Dashboard Layout**:
- Header: Platform name, navigation, notifications, user menu
- Left Sidebar: Navigation (Dashboard, Monitoring, Analysis, Reports, Settings)
- Main Content: Grid of metric cards + interactive map + recent alerts

**Map Interface**:
- Full-height map with layer controls
- Color-coded zones (green=healthy, yellow=at-risk, red=degraded)
- Click to drill down into specific areas
- Floating info cards on selection

**Analysis View**:
- Upload area for soil data/images
- AI processing indicator with animated pulse
- Results displayed in structured cards with confidence scores
- Actionable recommendations in highlighted boxes

## Accessibility & Polish

- Maintain WCAG AA contrast ratios throughout
- All interactive elements have visible focus states
- Tooltips on hover for technical terms
- Loading states with skeleton screens
- Empty states with helpful guidance
- Responsive breakpoints: mobile (320px), tablet (768px), desktop (1024px), wide (1440px)

## Animation Strategy

**Minimal, Purposeful Animations**:
- Page transitions: Subtle fade-in
- Data updates: Number count-up animations
- Map interactions: Smooth zoom/pan
- AI analysis: Pulse effect during processing
- Chart rendering: Staggered bar/line reveals (brief, 300ms)

**No Animations**:
- Background effects
- Continuous loops
- Distracting particles or parallax

This platform should feel authoritative, scientifically credible, and action-oriented while maintaining visual appeal for stakeholder presentations.
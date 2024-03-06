# Greenspark (Vue 3 + TypeScript + Vite)

To start:

1. `bun i`
2. `bun dev`

### Comments after development
1. Shadow of main box in not readable since the designer created 6 different shadows and combine them instead of create just one.
```css
box-shadow: 0px 0.7777777910232544px 2.9907407760620117px 0px rgba(0, 0, 0, 0.012);
box-shadow: 0px 3.422222137451172px 6.192592620849609px 0px rgba(0, 0, 0, 0.0196);
box-shadow: 0px 8.399999618530273px 12.350000381469727px 0px rgba(0, 0, 0, 0.025);
box-shadow: 0px 16.177778244018555px 24.207406997680664px 0px rgba(0, 0, 0, 0.0304);
box-shadow: 0px 27.22222137451172px 44.50925827026367px 0px rgba(0, 0, 0, 0.038);
box-shadow: 0px 42px 76px 0px rgba(0, 0, 0, 0.05);
```
so after playing with it by my own I decided to set it like this:

`box-shadow: 0 10px 76px 0 rgba(0, 0, 0, 0.15);`

2. 

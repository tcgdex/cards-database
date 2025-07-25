import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Lanturn",
         ja: "ラントン",
         fr: "Chanteur",
         de: "Lanturn",
         es: "Lanturn",
         it: "Lanturn",
         pt: "Lanturn",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [171],
      hp: 80,
      types: ["Lightning"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Dual Armor",
            ja: "デュアルアーマー",
            fr: "Armure double",
            de: "Doppelpanzer",
            es: "Armadura dual",
            it: "Doppia armatura",
            pt: "Armadura dupla",
          },
          effect: {
            en: "As long as Lanturn has any Water Energy attached to it, Lanturn is both Water and Lightning type.",
            ja: "Lanturnに水エネルギーが付着している限り、Lanturnは水と稲妻の両方のタイプです。",
            fr: "Tant que Lanturn a une énergie d'eau qui y est attachée, Lanturn est à la fois l'eau et le type de foudre.",
            de: "Solange Lanturn eine Wasserenergie hat, ist Lanturn sowohl Wasser als auch Blitz.",
            es: "Mientras Lanturn tenga alguna energía de agua unida a él, Lanturn es tanto de agua como tipo de rayo.",
            it: "Finché Lanturn ha un'energia idrica attaccata ad essa, Lanturn è sia l'acqua che il tipo di fulmini.",
            pt: "Enquanto Lanturn tiver qualquer energia hídrica anexada a ela, Lanturn é o tipo de água e um raio.",
          },
      }],

      attacks: [
        {
          cost: ["Lightning", "Colorless"],
          name: {
            en: "Razor Fin",
            ja: "かみそりフィン",
            fr: "Nageoire de rasoir",
            de: "Rasiermesser",
            es: "Aleta de afeitar",
            it: "Pinna di rasoio",
            pt: "Razor Fin",
          },
          damage: 30,
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Water Gun",
            ja: "ウォーターガン",
            fr: "Pistolet à eau",
            de: "Wasserpistole",
            es: "Pistola de agua",
            it: "Pistola ad acqua",
            pt: "Pistola de água",
          },
          effect: {
            en: "Does 40 damage plus 20 more damage for each Water Energy attached to Lanturn but not used to pay for this attack's Energy cost. You can't add more then{{sic}} 40 damage in this way.",
            ja: "40のダメージに加えて、ラントンに付着した水エネルギーごとに20のダメージがさらに20件ありますが、この攻撃のエネルギーコストの支払いには使用されません。この方法で{{sic}} 40ダメージを追加することはできません。",
            fr: "Fait 40 dégâts plus 20 dégâts supplémentaires pour chaque énergie d'eau attachée à Lanturn, mais pas utilisé pour payer le coût énergétique de cette attaque. Vous ne pouvez pas ajouter plus que {{sic}} 40 dégâts de cette manière.",
            de: "Fügt 40 Schäden plus 20 weitere Schäden für jede an Lanturn angeschlossene Wasserergie, aber nicht zur Bezahlung der Energiekosten dieses Angriffs. Sie können auf diese Weise nicht mehr als {{sic}} 40 Schaden hinzufügen.",
            es: "Hace 40 daños más 20 daños más por cada energía de agua unida a Lanturn pero no se usa para pagar el costo de energía de este ataque. No puede agregar más que {{sic}} 40 daño de esta manera.",
            it: "Fa 40 danni più 20 danni in più per ogni energia idrica attaccata a Lanturn ma non è usato per pagare il costo energetico di questo attacco. Non puoi aggiungere di più rispetto al danno {{sic}} 40 in questo modo.",
            pt: "Os 40 danos mais 20 mais danos para cada energia da água ligados a Lanturn, mas não costumavam pagar pelo custo de energia desse ataque. Você não pode adicionar mais então {{sic}} 40 danos dessa maneira.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};

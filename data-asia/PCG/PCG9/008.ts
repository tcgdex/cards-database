import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
         en: "Arbok (Delta Species)",
         ja: "アーボック（デルタ種）",
         fr: "Arbok (espèces delta)",
         de: "Arbok (Delta -Arten)",
         es: "Arbok (especie delta)",
         it: "Arbok (Delta Species)",
         pt: "Arbok (espécie Delta)",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [24],
      hp: 80,
      types: ["Fire"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Burning Venom",
            ja: "燃えている毒",
            fr: "Venin brûlant",
            de: "Brennen Gift",
            es: "Venom ardiente",
            it: "Venom in fiamme",
            pt: "Venom ardente",
          },
          effect: {
            en: "The Defending Pokemon is now Burned and Poisoned.",
            ja: "防御ポケモンは現在燃やされ、毒されています。",
            fr: "Le Pokémon en défense est maintenant brûlé et empoisonné.",
            de: "Das verteidigende Pokémon wird jetzt verbrannt und vergiftet.",
            es: "El Pokémon defensor ahora está quemado y envenenado.",
            it: "Il Pokemon in carica viene ora bruciato e avvelenato.",
            pt: "O Pokémon atual agora está queimado e envenenado.",
          },
        },
        {
          cost: ["Fire", "Fire", "Colorless"],
          name: {
            en: "Strangle",
            ja: "絞め殺し",
            fr: "Étrangler",
            de: "Erwürgen",
            es: "Estrangular",
            it: "Strangolare",
            pt: "Estrangular",
          },
          effect: {
            en: "If the Defending Pokemon has d on its card, this attack does 50 damage plus 30 more damage.",
            ja: "ディフェンディングポケモンがカードにDがある場合、この攻撃は50のダメージと30ダメージを与えます。",
            fr: "Si le Pokémon en défense a D sur sa carte, cette attaque fait 50 dégâts plus 30 dégâts supplémentaires.",
            de: "Wenn das verteidigende Pokemon D auf seiner Karte hat, verursacht dieser Angriff 50 Schäden plus 30 weitere Schäden.",
            es: "Si el Pokémon defensor tiene D en su carta, este ataque hace 50 daños más 30 más de daño.",
            it: "Se il Pokemon in carica ha D sulla sua carta, questo attacco infligge 50 danni più 30 danni.",
            pt: "Se o Pokémon atual tiver D em seu cartão, esse ataque causará 50 danos mais 30 danos.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};

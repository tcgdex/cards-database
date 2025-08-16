import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Koga's Arbok",
         ja: "コガのアーボック",
         fr: "Arbok de Koga",
         de: "Kogas Arbok",
         es: "Arbok de Koga",
         it: "Koga's Arbok",
         pt: "Arbok de Koga",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [24],
      hp: 90,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Poison Buildup",
            ja: "毒物の蓄積",
            fr: "Accumulation de poison",
            de: "Giftaufbau",
            es: "Acumulación de veneno",
            it: "Accumulo di veleno",
            pt: "Acúmulo de veneno",
          },
          effect: {
            en: "Koga's Arbok is now Poisoned.",
            ja: "コガのアーボックは現在毒されています。",
            fr: "L'arbok de Koga est maintenant empoisonné.",
            de: "Kogas Arbok ist jetzt vergiftet.",
            es: "El Arbok de Koga ahora está envenenado.",
            it: "L'Arbok di Koga è ora avvelenato.",
            pt: "O Arbok de Koga está agora envenenado.",
          },
        },
        {
          cost: ["Grass", "Grass"],
          name: {
            en: "Poison Power",
            ja: "毒力",
            fr: "Puissance de poison",
            de: "Giftkraft",
            es: "Poder de veneno",
            it: "Potere veleno",
            pt: "Poder de veneno",
          },
          effect: {
            en: "If Koga's Arbok is Poisoned, this attack's base damage is 40 instead of 20 and the Defending Pokemon is now Poisoned.",
            ja: "KogaのArbokが毒されている場合、この攻撃のベースダメージは20ではなく40であり、防御ポケモンが毒されています。",
            fr: "Si l'arbok de Koga est empoisonné, les dégâts de base de cette attaque sont de 40 au lieu de 20 et le Pokémon en défense est maintenant empoisonné.",
            de: "Wenn Kogas Arbok vergiftet ist, beträgt der Grundschaden dieses Angriffs 40 anstelle von 20 und das verteidigende Pokemon ist jetzt vergiftet.",
            es: "Si el Arbok de Koga está envenenado, el daño base de este ataque es 40 en lugar de 20 y el Pokémon defensor ahora está envenenado.",
            it: "Se l'Arbok di Koga è avvelenato, il danno base di questo attacco è 40 anziché 20 e il Pokemon in difesa è ora avvelenato.",
            pt: "Se o Arbok de Koga estiver envenenado, o dano básico desse ataque é de 40 em vez de 20 e o Pokémon atual está agora envenenado.",
          },
          damage: 20,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};

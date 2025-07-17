import {Card} from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
      set: Set,
      name: {
         en: "Jynx",
         ja: "ジンクス",
         fr: "Jynx",
         de: "Jynx",
         es: "Jindo",
         it: "Jynx",
         pt: "Jynx",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [124],
      hp: 60,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Water"],
          name: {
            en: "Freezing Kiss Goodnight",
            ja: "おやすみなさいキスのフリーズキス",
            fr: "Gentuage baiser bonne nuit",
            de: "Gefrieriger Kuss Goodnight",
            es: "Beso congelado Buenas noches",
            it: "Bacio gelido buonanotte",
            pt: "Beijo congelante boa noite",
          },
          effect: {
            en: "The Defending Pokemon is now Asleep.",
            ja: "防御ポケモンは今眠っています。",
            fr: "Le Pokémon en défense est maintenant endormi.",
            de: "Das verteidigende Pokemon schläft jetzt.",
            es: "El Pokémon defensor ahora está dormido.",
            it: "Il Pokemon in carica è ora addormentato.",
            pt: "O Pokémon atual está agora dormindo.",
          },
        },
        {
          cost: ["Psychic", "Psychic", "Colorless"],
          name: {
            en: "Strange Dance",
            ja: "奇妙なダンス",
            fr: "Danse étrange",
            de: "Seltsamer Tanz",
            es: "Baile extraño",
            it: "Danza strana",
            pt: "Dança estranha",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 20 damage plus 20 more damage and the Defending Pokemon is now Confused. If tails, this attack does 20 damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は20ダメージに加えて20ダメージを与え、防御ポケモンが混乱しています。尾の場合、この攻撃は20ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 20 dégâts plus 20 dégâts supplémentaires et le Pokémon en défense est maintenant confus. Si Tails, cette attaque fait 20 dégâts.",
            de: "Eine Münze drehen. Wenn dieser Angriff 20 Schäden plus 20 weitere Schäden verursacht und das verteidigende Pokémon jetzt verwirrt ist. Wenn Schwänze, verursacht dieser Angriff 20 Schaden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 20 daños más 20 más de daño y el Pokémon defensor ahora está confundido. Si Tails, este ataque hace 20 daños.",
            it: "Capovolgi una moneta. Se le teste, questo attacco infligge 20 danni più 20 danni in più e il Pokemon in carica è ora confuso. Se le code, questo attacco infligge 20 danni.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 20 danos mais 20 mais danos e o Pokémon atual agora está confuso. Se as caudas, esse ataque causam 20 danos.",
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

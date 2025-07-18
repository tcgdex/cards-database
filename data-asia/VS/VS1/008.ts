import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Bugsy's Butterfree",
         ja: "Bugsyの蝶",
         fr: "Butterfree de Bugsy",
         de: "Bugsy's Butterfree",
         es: "Bugsy's Butterfree",
         it: "Butterfree di Bugsy",
         pt: "Bugsy's Butterfree",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [12],
      hp: 60,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Whirlwind",
            ja: "旋風",
            fr: "Tourbillon",
            de: "Wirbelwind",
            es: "Torbellino",
            it: "Turbine",
            pt: "Turbilhão",
          },
          effect: {
            en: "Flip a coin. If heads and if your opponent has any Benched Pokemon, your opponent chooses 1 of them and switches it with the Defending Pokemon.",
            ja: "コインをひっくり返します。頭と相手がベンチポケモンを持っている場合、対戦相手はそれらの1つを選択し、防御ポケモンでそれを切り替えます。",
            fr: "Retourner une pièce. Si les têtes et si votre adversaire a un pokemon banc, votre adversaire en choisit un et le change avec le Pokémon en défense.",
            de: "Eine Münze drehen. Wenn der Köpfe und Ihr Gegner ein Pokémon mit einem Bank -Pokemon hat, wählt Ihr Gegner 1 davon aus und schaltet es mit dem verteidigenden Pokemon.",
            es: "Voltea una moneda. Si las cabezas y si tu oponente tiene algún Pokémon de banca, tu oponente elige 1 de ellos y lo cambia con el Pokémon defensor.",
            it: "Capovolgi una moneta. Se la testa e se il tuo avversario ha dei Pokemon da banco, il tuo avversario ne sceglie 1 e lo cambia con il Pokemon in difesa.",
            pt: "Vire uma moeda. Se as cabeças e se o seu oponente tiver algum Pokemon em bancada, seu oponente escolherá 1 delas e a troca com o Pokémon defensor.",
          },
          damage: 10,
        },
        {
          cost: ["Grass", "Colorless", "Colorless"],
          name: {
            en: "Psybeam",
            ja: "PSYBEAM",
            fr: "Psybeam",
            de: "Psybeam",
            es: "Psíquico",
            it: "Psybeam",
            pt: "Psybeam",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Confused.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant confus.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokemon jetzt verwirrt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está confundido.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora confuso.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon atual agora está confuso.",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};

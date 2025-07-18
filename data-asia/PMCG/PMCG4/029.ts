import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Dark Jolteon",
         ja: "ダークジョルテオン",
         fr: "Jolteon sombre",
         de: "Dark Jolteon",
         es: "Jolteon oscuro",
         it: "Dark Jolteon",
         pt: "Jolteon escuro",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [135],
      hp: 50,
      types: ["Lightning"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Lightning"],
          name: {
            en: "Lightning Flash",
            ja: "稲妻フラッシュ",
            fr: "Éclair",
            de: "Blitz",
            es: "Flash de rayos",
            it: "Lightning Flash",
            pt: "Lightning Flash",
          },
          effect: {
            en: "If the Defending Pokemon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
            ja: "防衛ポケモンが相手の次のターン中に攻撃を試みた場合、対戦相手はコインをひっくり返します。尾の場合、その攻撃は何もしません。",
            fr: "Si le Pokémon en défense essaie d'attaquer pendant le prochain tour de votre adversaire, votre adversaire retourne une pièce. Si Tails, cette attaque ne fait rien.",
            de: "Wenn das verteidigende Pokemon versucht, während der nächsten Runde Ihres Gegners anzugreifen, dreht Ihr Gegner eine Münze. Wenn Schwänze, tut dieser Angriff nichts.",
            es: "Si el Pokémon defensor intenta atacar durante el próximo turno de tu oponente, tu oponente voltea una moneda. Si Tails, ese ataque no hace nada.",
            it: "Se il Pokemon in carica cerca di attaccare durante il prossimo turno del tuo avversario, il tuo avversario lancia una moneta. Se la coda, quell'attacco non fa nulla.",
            pt: "Se o pokemon atual tentar atacar durante o próximo turno do seu oponente, seu oponente vira uma moeda. Se caudas, esse ataque não faz nada.",
          },
          damage: 20,
        },
        {
          cost: ["Lightning", "Lightning", "Colorless"],
          name: {
            en: "Thunder Attack",
            ja: "サンダー攻撃",
            fr: "Attaque au tonnerre",
            de: "Donnerangriff",
            es: "Trueno",
            it: "Attacco del tuono",
            pt: "Ataque de trovão",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Paralyzed. If tails, Dark Jolteon does 10 damage to itself.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。尾の場合、ダークジョルテオンはそれ自体に10ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant paralysé. Si Tails, Dark Jolteon se fait 10 dégâts.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokémon jetzt gelähmt. Wenn Schwänze, verursacht Dark Jolteon 10 Schäden an sich.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está paralizado. Si Tails, Dark Jolteon hace 10 daños a sí mismo.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora paralizzato. Se le code, Dark Jolteon infligge 10 danni a se stesso.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon defensor agora está paralisado. Se caudas, o escuro Jolteon causa 10 danos a si mesmo.",
          },
          damage: 30,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
      ],
};

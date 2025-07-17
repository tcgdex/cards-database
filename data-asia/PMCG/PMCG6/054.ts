import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Sabrina's Gengar",
         ja: "サブリナのジェンガー",
         fr: "Gengar de Sabrina",
         de: "Sabrinas Gengar",
         es: "Gengar de Sabrina",
         it: "Gengar di Sabrina",
         pt: "Gengar de Sabrina",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [94],
      hp: 80,
      types: ["Psychic"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Psychic"],
          name: {
            en: "Pain Amplifier",
            ja: "痛みアンプ",
            fr: "Amplificateur de douleur",
            de: "Schmerzverstärker",
            es: "Amplificador del dolor",
            it: "Amplificatore del dolore",
            pt: "Amplificador de dor",
          },
          effect: {
            en: "Put a damage counter on each of your opponent's Pokemon that already has any damage counters on it.",
            ja: "対戦相手のポケモンのそれぞれにダメージカウンターを置いてください。",
            fr: "Mettez un compteur de dégâts sur chacun des Pokémon de votre adversaire qui a déjà des compteurs de dégâts dessus.",
            de: "Legen Sie einen Schadenschalter auf das Pokémon Ihres Gegners, der bereits Schadenszähler hat.",
            es: "Pon un mostrador de daño en el Pokémon de cada uno de tu oponente que ya tiene algún contador de daño.",
            it: "Metti un contatore di danni su ciascuno dei Pokemon del tuo avversario che ha già contatori di danni su di esso.",
            pt: "Coloque um contador de danos em cada um dos Pokémon do seu oponente que já tem algum contador de danos.",
          },
        },
        {
          cost: ["Psychic", "Psychic", "Psychic"],
          name: {
            en: "Call of the Night",
            ja: "夜の呼び出し",
            fr: "Appel de la nuit",
            de: "Ruf der Nacht",
            es: "Llamada de la noche",
            it: "Call of the Night",
            pt: "Call of the Night",
          },
          effect: {
            en: "Unless this attack Knocks Out the Defending Pokemon, flip 2 coins. If both of them are heads, your opponent shuffles his or her Active Pokemon and all cards attached to it into his or her deck.",
            ja: "この攻撃が防御ポケモンをノックアウトしない限り、2コインをひっくり返します。両方がヘッドである場合、対戦相手は彼または彼女のアクティブなポケモンとそれに取り付けられたすべてのカードを彼または彼女のデッキにシャッフルします。",
            fr: "À moins que cette attaque élimine le Pokémon en défense, flip 2 pièces. Si les deux sont des têtes, votre adversaire mélange son pokemon actif et toutes les cartes qui y sont attachées dans son deck.",
            de: "Es sei denn, dieser Angriff schlägt das verteidigende Pokémon aus, um 2 Münzen. Wenn beide Köpfe sind, schlurft Ihr Gegner sein aktives Pokémon und alle Karten, die an sein Deck angeschlossen sind.",
            es: "A menos que este ataque noquee al Pokémon defensor, voltee 2 monedas. Si ambos son cabezas, tu oponente baraja su Pokémon activo y todas las cartas unidas en su mazo.",
            it: "A meno che questo attacco non elimini le monete di Pokemon in carica, capovolgono 2. Se entrambi sono teste, il tuo avversario mescola il suo Pokemon attivo e tutte le carte attaccate ad esso nel suo mazzo.",
            pt: "A menos que esse ataque nocauteie o Pokémon atual, Flip 2 moedas. Se os dois são cabeças, seu oponente embaralha seu Pokémon ativo e todas as cartas presas a ele no deck dele.",
          },
          damage: 40,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
          subtype: "unlimited",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};

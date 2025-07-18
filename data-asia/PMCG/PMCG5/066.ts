import {Card} from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Erika's Dragonair",
         ja: "エリカのドラゴンエア",
         fr: "Dragonair d'Erika",
         de: "Erikas Dragonair",
         es: "Dragonair de Erika",
         it: "Dragonair di Erika",
         pt: "Erika's Dragonair",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [148],
      hp: 80,
      types: ["Colorless"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Blizzard",
            ja: "ブリザード",
            fr: "Blizzard",
            de: "Schneesturm",
            es: "Ventisca",
            it: "Bufera di neve",
            pt: "Nevasca",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 10 damage to each of your opponent's Benched Pokemon. If tails, this attack does 10 damage to each of your own Benched Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "コインをひっくり返します。頭の場合、この攻撃は相手のベンチポケモンのそれぞれに10ダメージを与えます。尾の場合、この攻撃はあなた自身のベンチポケモンのそれぞれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Retourner une pièce. Si les têtes, cette attaque inflige 10 dégâts à chacun des pokemon bancés de votre adversaire. Si Tails, cette attaque fait 10 dégâts à chacun de vos propres pokémon bancés. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Eine Münze drehen. Wenn der Köpfe, dieser Angriff an jedem Bankpokémon Ihres Gegners Schaden zufügt. Wenn Schwänze, schädigt dieser Angriff 10 an jedem Ihrer eigenen Pokémon. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Voltea una moneda. Si se dirige, este ataque hace 10 daños a cada Pokémon de banca de tu oponente. Si Tails, este ataque hace 10 daños a cada uno de sus propios Pokémon en banca. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 10 danni a ciascuno dei Pokemon in panchina del tuo avversario. Se le code, questo attacco infligge 10 danni a ciascuno dei tuoi Pokemon in panchina. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 10 danos a cada um dos Pokémon bancos do seu oponente. Se as caudas, esse ataque causam 10 danos a cada um de seus próprios Pokémon com bancada. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
          damage: 30,
        },
        {
          cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
          name: {
            en: "Take Away",
            ja: "取り除く",
            fr: "Emporter",
            de: "Wegbringen",
            es: "Llevar",
            it: "Porta via",
            pt: "Remover",
          },
          effect: {
            en: "Shuffle Erika's Dragonair and all cards attached to it into your deck. Then, your opponent shuffles his or her Active Pokemon and all cards attached to it into his or her deck.",
            ja: "Shuffle ErikaのDragonairとすべてのカードがデッキに取り付けられています。次に、相手はアクティブなポケモンとそれに取り付けられたすべてのカードを彼または彼女のデッキにシャッフルします。",
            fr: "Tanger le dragonair d'Erika et toutes les cartes qui y sont attachées dans votre deck. Ensuite, votre adversaire mélange son pokemon actif et toutes les cartes qui y sont attachées dans son deck.",
            de: "Shuffle Erikas Dragonair und alle Karten, die an Ihr Deck angeschlossen sind. Dann mischt Ihr Gegner sein aktives Pokémon und alle Karten, die an sein Deck angeschlossen sind.",
            es: "Arcara el dragona de Erika y todas las cartas adjuntas en tu mazo. Entonces, tu oponente baraja su Pokémon activo y todas las cartas unidas a él en su mazo.",
            it: "Shuffle Dragonair di Erika e tutte le carte attaccate nel tuo mazzo. Quindi, il tuo avversario mescola il suo Pokemon attivo e tutte le carte attaccate nel suo mazzo.",
            pt: "Afaste o dragonair de Erika e todas as cartas anexadas a ele no seu baralho. Então, seu oponente embaralha seu Pokémon ativo e todas as cartas anexadas a ele em seu deck.",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
        },
      ],
};

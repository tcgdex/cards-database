import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Dark Ursaring",
         ja: "暗いウルサリング",
         fr: "Ursaring sombre",
         de: "Dunkler Ursaring",
         es: "Oscuro Ursaring",
         it: "Ursaring oscuro",
         pt: "Ursaring escuro",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [217],
      hp: 60,
      types: ["Colorless"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Provoke",
            ja: "挑発します",
            fr: "Provoquer",
            de: "Provozieren",
            es: "Provocar",
            it: "Provocare",
            pt: "Provocar",
          },
          effect: {
            en: "Look at your opponent's hand. If he or she has any Baby Pokemon and/or Basic Pokemon there, you may put any number of them onto your opponent's Bench (as long as there's room). Then, your opponent looks at your hand. If you have any Baby Pokemon and/or Basic Pokemon there, your opponent may put any number of them onto your Bench (as long as there's room).",
            ja: "相手の手を見てください。彼または彼女がベビーポケモンや基本的なポケモンを持っている場合、それらの数を相手のベンチに置くことができます（部屋がある限り）。その後、相手はあなたの手を見ます。そこに赤ちゃんのポケモンや基本的なポケモンがある場合、相手は任意の数をベンチに置くことができます（部屋がある限り）。",
            fr: "Regardez la main de votre adversaire. S'il a un bébé Pokémon et / ou des Pokémon de base là-bas, vous pouvez en mettre un certain nombre sur le banc de votre adversaire (tant qu'il y a de la place). Ensuite, votre adversaire regarde votre main. Si vous avez un bébé pokemon et / ou des pokémon de base là-bas, votre adversaire peut en mettre un certain nombre sur votre banc (tant qu'il y a de la place).",
            de: "Schauen Sie sich die Hand Ihres Gegners an. Wenn er oder sie dort ein Baby -Pokemon und/oder ein grundlegendes Pokémon hat, können Sie eine beliebige Anzahl von ihnen auf die Bank Ihres Gegners legen (solange es Platz gibt). Dann schaut Ihr Gegner Ihre Hand. Wenn Sie dort ein Baby -Pokemon und/oder ein grundlegendes Pokémon haben, kann Ihr Gegner eine beliebige Anzahl von ihm auf Ihre Bank legen (solange es Platz gibt).",
            es: "Mira la mano de tu oponente. Si él o ella tiene un bebé Pokémon y/o Pokémon básico allí, puede poner cualquier número de ellos en el banco de su oponente (siempre que haya espacio). Entonces, tu oponente mira tu mano. Si tiene algún Pokémon Baby y/o Pokémon básico allí, su oponente puede poner cualquier número de ellos en su banco (siempre que haya espacio).",
            it: "Guarda la mano del tuo avversario. Se lui o lei ha un pokemon per bambini e/o Pokemon di base lì, puoi metterne un numero qualsiasi sulla panchina del tuo avversario (fintanto che c'è spazio). Quindi, il tuo avversario ti guarda la mano. Se hai un pokemon per bambini e/o Pokemon di base lì, il tuo avversario può metterne un numero qualsiasi sul tuo panchina (purché c'è spazio).",
            pt: "Olhe para a mão do seu oponente. Se ele ou ela tiver algum Pokémon para bebês e/ou Pokémon básico lá, você poderá colocar qualquer número deles no banco do seu oponente (desde que houver espaço). Então, seu oponente olha para sua mão. Se você tiver algum Pokémon para bebês e/ou Pokémon básico, seu oponente poderá colocar qualquer número deles em seu banco (desde que houver espaço).",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Battle Frenzy",
            ja: "戦いの狂乱",
            fr: "Frénésie de combat",
            de: "Battle Rasern",
            es: "Frenesí de batalla",
            it: "Frenzia di battaglia",
            pt: "Battle Frenzy",
          },
          effect: {
            en: "For each Pokemon in play (yours and your opponent's), flip a coin. For each heads, this attack does 20 damage to that Pokemon. Don't apply Weakness and Resistance for this attack.",
            ja: "遊びのポケモン（あなたと相手）について、コインをひっくり返します。各ヘッドについて、この攻撃はそのポケモンに20のダメージを与えます。この攻撃に衰弱と抵抗を適用しないでください。",
            fr: "Pour chaque pokemon en jeu (le vôtre et celui de votre adversaire), retournez une pièce. Pour chaque tête, cette attaque fait 20 dégâts à ce Pokémon. N'appliquez pas la faiblesse et la résistance pour cette attaque.",
            de: "Für jedes Pokémon im Spiel (Ihr und Ihr Gegner) drehen Sie eine Münze. Für jeden Köpfe verursacht dieser Angriff 20 Schäden an diesem Pokémon. Wenden Sie keine Schwäche und Widerstand für diesen Angriff an.",
            es: "Para cada Pokémon en juego (tuyo y tu oponente), voltea una moneda. Para cada cabezal, este ataque hace 20 daños a ese Pokémon. No aplique debilidad y resistencia para este ataque.",
            it: "Per ogni Pokemon in gioco (il tuo e il tuo avversario), capovolgi una moneta. Per ogni testa, questo attacco fa 20 danni a quel Pokemon. Non applicare debolezza e resistenza per questo attacco.",
            pt: "Para cada Pokémon em jogo (o seu e o seu oponente), vire uma moeda. Para cada cabeça, esse ataque causa 20 de dano a esse Pokémon. Não aplique fraqueza e resistência a este ataque.",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};

import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
         en: "Mawile",
         ja: "マウィール",
         fr: "Mawile",
         de: "Mawile",
         es: "Mawile",
         it: "Mawile",
         pt: "Mawile",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [303],
      hp: 60,
      types: ["Metal"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Mining",
            ja: "マイニング",
            fr: "Exploitation minière",
            de: "Bergbau",
            es: "Minería",
            it: "Mining",
            pt: "Mineração",
          },
          effect: {
            en: "Search your deck for a Trainer card, show it to your opponent, and put it into your hand. If that card is a Pokemon Tool card, you may attach it to 1 of your Pokemon instead. Shuffle your deck afterward.",
            ja: "デッキを検索して、トレーナーカードを検索し、相手に見せて、手に入れてください。そのカードがポケモンツールカードの場合、代わりにポケモンの1つに添付できます。その後、デッキをシャッフルします。",
            fr: "Recherchez votre jeu pour une carte d'entraînement, montrez-la à votre adversaire et mettez-la dans votre main. Si cette carte est une carte à outils Pokemon, vous pouvez la fixer à 1 de votre Pokémon à la place. Mélanger votre deck par la suite.",
            de: "Suchen Sie Ihr Deck nach einer Trainerkarte, zeigen Sie es Ihrem Gegner und geben Sie sie in Ihre Hand. Wenn diese Karte eine Pokemon -Werkzeugkarte ist, können Sie sie stattdessen an 1 Ihrer Pokemon anschließen. Mischen Sie anschließend Ihr Deck.",
            es: "Busque en su mazo una tarjeta de entrenador, muéstrelo a su oponente y póngalo en su mano. Si esa tarjeta es una tarjeta de herramientas de Pokémon, puede adjuntarla a 1 de su Pokémon en su lugar. Baraja tu mazo después.",
            it: "Cerca nel tuo mazzo una carta dell'allenatore, mostralo al tuo avversario e mettilo in mano. Se quella carta è una scheda utensile Pokemon, puoi invece collegarla a 1 del tuo Pokemon. Shuffle il tuo mazzo in seguito.",
            pt: "Pesquise seu baralho em busca de uma carta de treinador, mostre -a ao seu oponente e coloque -o em sua mão. Se esse cartão for um cartão de ferramenta Pokemon, você poderá anexá -lo a 1 do seu Pokémon. Afaste seu baralho depois.",
          },
        },
        {
          cost: ["Metal", "Colorless"],
          name: {
            en: "Bite Off",
            ja: "噛む",
            fr: "Mordre",
            de: "Abbeißen",
            es: "Arrancar con los dientes",
            it: "Mordere",
            pt: "Morda",
          },
          effect: {
            en: "If the Defending Pokemon is Pokemon-ex, this attack does 20 damage plus 30 more damage.",
            ja: "防御ポケモンがポケモン-Exの場合、この攻撃は20ダメージに加えて30ダメージを与えます。",
            fr: "Si le Pokémon en défense est Pokemon-EX, cette attaque fait 20 dégâts plus 30 dégâts supplémentaires.",
            de: "Wenn das verteidigende Pokemon Pokemon-EX ist, verursacht dieser Angriff 20 Schaden zuzüglich 30 weitere Schäden.",
            es: "Si el Pokémon defensor es Pokémon-EX, este ataque hace 20 daños más 30 más de daño.",
            it: "Se il Pokemon in carica è Pokemon-Ex, questo attacco infligge 20 danni più 30 danni.",
            pt: "Se o pokemon atual for Pokemon-Ex, esse ataque causará 20 danos mais 30 mais danos.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
          stamp: ["1st edition"],
        },
        {
          type: "holo",
          subtype: "unlimited",
        },
      ],
};

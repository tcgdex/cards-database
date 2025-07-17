import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
         en: "Pichu",
         ja: "ピチュ",
         fr: "Pichu",
         de: "Pichu",
         es: "Pichu",
         it: "Pichu",
         pt: "Pichu",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [172],
      hp: 40,
      types: ["Lightning"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Baby Evolution",
            ja: "赤ちゃんの進化",
            fr: "Évolution de bébé",
            de: "Babyentwicklung",
            es: "Evolución del bebé",
            it: "Evoluzione del bambino",
            pt: "Evolução do bebê",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, you may put Pikachu from your hand onto Pichu (this counts as evolving Pichu) and remove all damage counters from Pichu.",
            ja: "順番<em>（攻撃の前に）</em> </em>、ピカチュウを手からピチュに置き（これは進化するピチュとしてカウントされる）、ピチュからすべてのダメージカウンターを削除することができます。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </em>, vous pouvez mettre Pikachu de votre main sur Pichu (cela compte comme Pichu en évolution) et retirer tous les compteurs de dégâts de Pichu.",
            de: "Einmal in Ihrem Zug <em> (vor Ihrem Angriff) </em> können Sie Pikachu von Ihrer Hand auf Pichu stellen (dies zählt als sich entwickelnde Pichu) und alle Schadenszähler von Pichu entfernen.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, puede colocar a Pikachu de su mano en Pichu (esto cuenta como Pichu en evolución) y eliminar todos los contadores de daño de Pichu.",
            it: "Una volta durante il tuo turno <em> (prima del tuo attacco) </em>, puoi mettere Pikachu dalla mano a Pichu (questo conta come Pichu in evoluzione) e rimuovere tutti i contatori di danno da Pichu.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, você pode colocar Pikachu da sua mão no Pichu (isso conta como evoluindo Pichu) e remover todos os contadores de danos do Pichu.",
          },
      }],

      attacks: [
        {
          cost: ["Lightning"],
          name: {
            en: "Energy Retrieval",
            ja: "エネルギー検索",
            fr: "Récupération d'énergie",
            de: "Energieabzug",
            es: "Recuperación de energía",
            it: "Recupero energetico",
            pt: "Recuperação de energia",
          },
          effect: {
            en: "Search your discard pile for up to 2 basic Energy cards and attach them to 1 of your Pokemon. Put 1 damage counter on that Pokemon for each Energy card attached in this way.",
            ja: "廃棄の山を検索して、最大2枚の基本エネルギーカードを使用し、ポケモン1枚に取り付けます。この方法で添付された各エネルギーカードのポケモンに1つのダメージカウンターを置きます。",
            fr: "Recherchez votre tas de défausse jusqu'à 2 cartes d'énergie de base et attachez-les à 1 de votre Pokémon. Mettez 1 compteur de dégâts sur ce Pokémon pour chaque carte d'énergie attachée de cette manière.",
            de: "Suchen Sie Ihren Ablagerungsstapel nach bis zu 2 grundlegenden Energiekarten und fügen Sie ihn an 1 Ihres Pokémons an. Legen Sie für jede auf diese Weise befestigte Energiekarte 1 Schadenschalter auf dieses Pokémon.",
            es: "Busque en su pila de descarte hasta 2 tarjetas de energía básicas y adjuntelas a 1 de su Pokémon. Pon 1 contador de daño en ese Pokémon para cada tarjeta de energía unida de esta manera.",
            it: "Cerca il tuo mucchio di scarti per un massimo di 2 carte di energia di base e allegale a 1 del tuo Pokemon. Metti 1 contatore di danni su quel Pokemon per ogni carta di energia collegata in questo modo.",
            pt: "Pesquise sua pilha de descarte por até 2 cartões básicos de energia e anexe -os a 1 do seu Pokémon. Coloque 1 contador de danos nesse Pokémon para cada cartão de energia anexado dessa maneira.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};

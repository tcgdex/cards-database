import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Slowking",
         ja: "スローキング",
         fr: "Ralentissement",
         de: "Langsamer",
         es: "Lento",
         it: "Rallentamento",
         pt: "Desacelerar",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [199],
      hp: 70,
      types: ["Psychic"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Item Search",
            ja: "アイテム検索",
            fr: "Recherche d'articles",
            de: "Elementsuche",
            es: "Búsqueda de artículos",
            it: "Ricerca degli articoli",
            pt: "Pesquisa de item",
          },
          effect: {
            en: "Once during your turn (before your attack), you may search your deck for a PokÃ©mon Tool card, show it to your opponent, and put it into your hand. Shuffle your deck afterward. This power can't be used if Slowking is affected by a Special Condition.",
            ja: "ターン中（攻撃の前に）一度（攻撃の前）、ポケモンツールカードのデッキを検索し、対戦相手に見せて、手に渡すことができます。その後、デッキをシャッフルします。スローキングが特別な状態の影響を受ける場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez rechercher votre jeu une carte à outils Pokã © Mon, le montrer à votre adversaire et le mettre dans votre main. Mélanger votre deck par la suite. Cette puissance ne peut pas être utilisée si le ralentissement est affecté par une condition spéciale.",
            de: "Sobald Sie in Ihrem Zug (vor Ihrem Angriff) sind, können Sie Ihr Deck nach einer Poké -Mon -Werkzeugkarte suchen, es Ihrem Gegner zeigen und in Ihre Hand legen. Mischen Sie anschließend Ihr Deck. Diese Leistung kann nicht angewendet werden, wenn das langsame Zustand durch einen besonderen Zustand beeinträchtigt wird.",
            es: "Una vez durante su turno (antes de su ataque), puede buscar en su mazo una tarjeta de herramienta Poké Mon, mostrarla a su oponente y ponerla en su mano. Baraja tu mazo después. Esta potencia no se puede usar si la lenta se ve afectada por una condición especial.",
            it: "Una volta durante il tuo turno (prima del tuo attacco), puoi cercare nel tuo mazzo una scheda utensile Poké mon, mostrarla al tuo avversario e metterlo in mano. Shuffle il tuo mazzo in seguito. Questa potenza non può essere utilizzata se il rallentamento è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), você pode pesquisar no seu baralho uma placa de ferramenta Poké Mon, mostrá -lo ao seu oponente e colocá -lo em sua mão. Afaste seu baralho depois. Esse poder não pode ser usado se a desaceleração for afetada por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Psychic", "Colorless"],
          name: {
            en: "Aftermath",
            ja: "余波",
            fr: "Conséquences",
            de: "Nachwirkungen",
            es: "Secuelas",
            it: "Conseguenze",
            pt: "After",
          },
          effect: {
            en: "Does 20 damage plus 10 more damage for each Pokemon Tool card in your discard pile. You can't add more than 60 damage in this way.",
            ja: "廃棄パイル内の各ポケモンツールカードに対して20のダメージと10ダメージがさらに10ダメージを与えます。この方法で60以上のダメージを追加することはできません。",
            fr: "Fait 20 dégâts plus 10 dommages supplémentaires pour chaque carte à outils Pokémon dans votre tas de défausse. Vous ne pouvez pas ajouter plus de 60 dégâts de cette manière.",
            de: "Fügt 20 Schäden plus 10 weitere Schäden für jede Pokemon -Werkzeugkarte in Ihrem Ablagerungsstapel. Auf diese Weise können Sie nicht mehr als 60 Schäden hinzufügen.",
            es: "Hace 20 daños más 10 más de daño por cada tarjeta de herramienta Pokemon en su pila de descarte. No puede agregar más de 60 daños de esta manera.",
            it: "Fa 20 danni più 10 danni in più per ogni scheda utensile Pokemon nella pila di scarto. Non puoi aggiungere più di 60 danni in questo modo.",
            pt: "Causam 20 danos mais 10 mais danos para cada cartão de ferramenta Pokemon na sua pilha de descarte. Você não pode adicionar mais de 60 danos dessa maneira.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
          subtype: "unlimited",
        },
      ],
};

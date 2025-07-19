import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
         en: "Nidoqueen (Delta Species)",
         ja: "nidoqueen（デルタ種）",
         fr: "Nidqueen (espèces delta)",
         de: "Nidoqueen (Delta -Arten)",
         es: "Nidoqueen (especie delta)",
         it: "Nidoqueen (Delta Species)",
         pt: "NidoQueen (espécie Delta)",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [31],
      hp: 100,
      types: ["Metal"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Invitation",
            ja: "招待",
            fr: "Invitation",
            de: "Einladung",
            es: "Invitación",
            it: "Invito",
            pt: "Convite",
          },
          effect: {
            en: "Once during your turn (before your attack), you may search your deck for a Basic PokÃ©mon or Evolution card, show it to your opponent, and put it into your hand. Shuffle your deck afterward. This power can't be used if Nidoqueen is affected by a Special Condition.",
            ja: "ターン中（攻撃の前に）一度（攻撃の前）、基本的なPokã©MonまたはEvolutionカードを検索し、相手に見せて、手に渡すことができます。その後、デッキをシャッフルします。 Nidoqueenが特別な状態の影響を受けている場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez rechercher votre jeu pour une carte de base de Pokã © Mon ou Evolution, le montrer à votre adversaire et le mettre dans votre main. Mélanger votre deck par la suite. Cette puissance ne peut pas être utilisée si le nidocheen est affecté par une condition spéciale.",
            de: "Sobald Sie während Ihres Zuges (vor Ihrem Angriff) sind, können Sie Ihr Deck nach einer grundlegenden Pokémon- oder Evolutionskarte durchsuchen, es Ihrem Gegner zeigen und in Ihre Hand legen. Mischen Sie anschließend Ihr Deck. Diese Kraft kann nicht verwendet werden, wenn Nidoqueen von einem besonderen Zustand betroffen ist.",
            es: "Una vez durante su turno (antes de su ataque), puede buscar en su mazo una tarjeta de Poké o evolución básica, mostrarla a su oponente y ponerlo en su mano. Baraja tu mazo después. Esta potencia no se puede usar si Nidoqueen se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno (prima del tuo attacco), puoi cercare nel tuo mazzo un poké mon o una carta di evoluzione, mostrarlo al tuo avversario e metterlo in mano. Shuffle il tuo mazzo in seguito. Questo potere non può essere utilizzato se Nidoqueen è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), você pode pesquisar no seu baralho um cartão básico de Mon ou evolução, mostrá -lo ao seu oponente e colocá -lo em sua mão. Afaste seu baralho depois. Esse poder não pode ser usado se o NidoQueen for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Vengeance",
            ja: "復讐",
            fr: "Vengeance",
            de: "Rache",
            es: "Venganza",
            it: "Vendetta",
            pt: "Vingança",
          },
          effect: {
            en: "Does 30 damage plus 10 more damage for each Basic Pokemon and each Evolution card in your discard pile. You can't add more than 60 damage in this way.",
            ja: "基本的なポケモンごとに30のダメージに加えて、廃棄パイル内の各進化カードに対してさらに10ダメージを与えます。この方法で60以上のダメージを追加することはできません。",
            fr: "Fait 30 dégâts plus 10 dommages supplémentaires pour chaque Pokémon de base et chaque carte d'évolution de votre tas de défausse. Vous ne pouvez pas ajouter plus de 60 dégâts de cette manière.",
            de: "Fügt 30 Schäden plus 10 weitere Schäden für jedes Basis -Pokémon und jede Evolutionskarte in Ihrem Ablagerungsstapel. Auf diese Weise können Sie nicht mehr als 60 Schäden hinzufügen.",
            es: "Hace 30 daños más 10 daños más por cada Pokémon básico y cada tarjeta de evolución en su pila de descarte. No puede agregar más de 60 daños de esta manera.",
            it: "Fa 30 danni più 10 danni in più per ogni Pokemon di base e ogni carta di evoluzione nella pila di scarto. Non puoi aggiungere più di 60 danni in questo modo.",
            pt: "30 danos mais 10 mais danos para cada Pokémon básico e cada cartão de evolução na sua pilha de descarte. Você não pode adicionar mais de 60 danos dessa maneira.",
          },
        },
      ],

      retreat: 2,

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

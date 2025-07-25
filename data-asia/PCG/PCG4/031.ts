import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Smoochum",
         ja: "スムーチュム",
         fr: "Smoochum",
         de: "Smochum",
         es: "Smoochum",
         it: "Smoochum",
         pt: "Smoochum",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [238],
      hp: 50,
      types: ["Water"],
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
            en: "Once during your turn (before your attack), you may put Jynx from your hand onto Smoochum (this counts as evolving Smoochum) and remove all damage counters from Smoochum.",
            ja: "ターン中（攻撃の前に）一度、Jynxを手からsmoochum（これは進化するSmoochumとしてカウント）に置き、Smoochumからすべてのダメージカウンターを削除することができます。",
            fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez mettre Jynx de votre main sur Smoochum (cela compte comme smoochum en évolution) et retirer tous les compteurs de dégâts de Smoochum.",
            de: "Sobald Sie während Ihres Zuges (vor Ihrem Angriff) sind, können Sie Jynx von Ihrer Hand auf Smoochum (dies zählt als sich entwickelnde Smochum) und entfernen alle Schadenszähler aus Smochum.",
            es: "Una vez durante su turno (antes de su ataque), puede colocar a Jynx de su mano en Smoochum (esto cuenta como Smoochum en evolución) y eliminar todos los contadores de daño de Smoochum.",
            it: "Una volta durante il tuo turno (prima del tuo attacco), puoi mettere Jynx dalla mano su Smoochum (questo conta come smoochum in evoluzione) e rimuovere tutti i contatori di danno da Smoochum.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), você pode colocar o Jynx da sua mão no Smoochum (isso conta como evoluindo Smoochum) e remover todos os contadores de danos do Smoochum.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Blown Kiss",
            ja: "吹き飛ばされたキス",
            fr: "Baiser",
            de: "Geblasener Kuss",
            es: "Beso soplado",
            it: "Bacio soffiato",
            pt: "Beijo soprado",
          },
          effect: {
            en: "Put 1 damage counter on 1 of your opponent's Pokemon.",
            ja: "相手のポケモンの1つに1つのダメージカウンターを置きます。",
            fr: "Mettez 1 compteur de dégâts sur le pokemon de votre adversaire.",
            de: "Legen Sie 1 Schadenschalter auf 1 des Pokémon Ihres Gegners.",
            es: "Pon 1 mostrador de daño en 1 de los Pokémon de tu oponente.",
            it: "Metti 1 contatore di danni su 1 del Pokemon del tuo avversario.",
            pt: "Coloque 1 contador de danos em 1 do Pokémon do seu oponente.",
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
          stamp: ["1st edition"],
        },
      ],
};

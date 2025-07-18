import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
      set: Set,
      name: {
         en: "Beldum",
         ja: "ベルダム",
         fr: "Bêler",
         de: "Beldum",
         es: "Beldum",
         it: "Beldum",
         pt: "Beldum",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [374],
      hp: 50,
      types: ["Metal"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Magnetic Call",
            ja: "磁気呼び出し",
            fr: "Appel magnétique",
            de: "Magnetanruf",
            es: "Llamada magnética",
            it: "Chiamata magnetica",
            pt: "Chamada magnética",
          },
          effect: {
            en: "Once during your turn (before your attack), you may flip a coin. If heads, search your deck for a Metal Basic PokÃ©mon and put it onto your Bench. Shuffle your deck afterward. This power can't be used if Beldum is affected by a Special Condition.",
            ja: "ターン中に（攻撃の前に）、コインをひっくり返すことができます。頭の場合は、デッキを検索して、金属製の基本的なポケモンを探して、ベンチに置きます。その後、デッキをシャッフルします。ベルダムが特別な状態の影響を受けている場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez retourner une pièce. Si les têtes, recherchez votre deck pour un poké de base en métal et mettez-le sur votre banc. Mélanger votre deck par la suite. Ce pouvoir ne peut pas être utilisé si Beldum est affecté par une condition spéciale.",
            de: "Sobald Sie während Ihres Zuges (vor Ihrem Angriff) sind, können Sie eine Münze umdrehen. Wenn Sie Köpfe köpft, suchen Sie Ihr Deck nach einem Metallbasis -Poké mon und legen Sie es auf Ihre Bank. Mischen Sie anschließend Ihr Deck. Diese Kraft kann nicht verwendet werden, wenn Beldum von einem besonderen Zustand betroffen ist.",
            es: "Una vez durante su turno (antes de su ataque), puede voltear una moneda. Si se dirige, busque en su mazo un Poké Metal Basic y póngalo en su banco. Baraja tu mazo después. Esta potencia no se puede usar si Beldum se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno (prima del tuo attacco), puoi capovolgere una moneta. Se teste, cerca nel tuo mazzo un pokã © di base in metallo e mettilo sulla panchina. Shuffle il tuo mazzo in seguito. Questa potenza non può essere utilizzata se Beldum è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), você pode virar uma moeda. Se as cabeças, procure seu baralho em busca de um metal básico e coloque -o em seu banco. Afaste seu baralho depois. Esse poder não pode ser usado se Beldum for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Metal", "Colorless"],
          name: {
            en: "Metal Charge",
            ja: "金属電荷",
            fr: "Charge métallique",
            de: "Metallladung",
            es: "Carga de metal",
            it: "Carica metallica",
            pt: "Carga de metal",
          },
          effect: {
            en: "Put 1 damage counter on Beldum.",
            ja: "ベルダムに1つのダメージカウンターを置きます。",
            fr: "Mettez 1 compteur de dégâts sur Beldum.",
            de: "Legen Sie 1 Schadenschalter auf Beldum.",
            es: "Pon 1 mostrador de daño en Beldum.",
            it: "Metti 1 contatore di danni su Beldum.",
            pt: "Coloque 1 contador de danos em Beldum.",
          },
          damage: 30,
        },
      ],

      retreat: 2,

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

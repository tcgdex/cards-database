import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Delcatty",
         ja: "delcatty",
         fr: "Delcatty",
         de: "Delcatty",
         es: "Delcatty",
         it: "Delcatty",
         pt: "Delcatty",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [301],
      hp: 80,
      types: ["Colorless"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Reactive Shift",
            ja: "反応シフト",
            fr: "Décalage réactif",
            de: "Reaktive Verschiebung",
            es: "Cambio reactivo",
            it: "Spostamento reattivo",
            pt: "Mudança reativa",
          },
          effect: {
            en: "Once during your turn (before your attack), you may move a React Energy card attached to 1 of your PokÃ©mon to another of your PokÃ©mon. This power can't be used if Delcatty is affected by a Special Condition.",
            ja: "ターン中（攻撃の前）に一度、ポケモンの1つに取り付けられた反応エネルギーカードを別のポケモンに移動できます。 Delcattyが特別な状態の影響を受ける場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez déplacer une carte d'énergie React attachée à 1 de votre poké mon à un autre de votre poké. Cette puissance ne peut pas être utilisée si Delcatty est affectée par une condition spéciale.",
            de: "Sobald Sie während Ihres Zuges (vor Ihrem Angriff) sind, können Sie eine React Energy -Karte an 1 Ihres Poké Mons an einen anderen Ihrer Pokémon verschieben. Diese Leistung kann nicht angewendet werden, wenn Delcatty von einem besonderen Zustand betroffen ist.",
            es: "Una vez durante su turno (antes de su ataque), puede mover una tarjeta de energía React unida a 1 de su Poké Mon a otro de su Poké Mon. Esta potencia no se puede usar si DelCatty se ve afectada por una condición especial.",
            it: "Una volta durante il tuo turno (prima del tuo attacco), puoi spostare una carta di energia di reazione collegata a 1 del tuo poké a un altro del tuo poké mon. Questa potenza non può essere utilizzata se Delcatty è influenzata da una condizione speciale.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), você pode mover um cartão de energia do React conectado a 1 do seu Poké Mon para outro de seu Poké Mon. Esse poder não pode ser usado se Delcatty for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Energy Link",
            ja: "エネルギーリンク",
            fr: "Lien énergétique",
            de: "Energieverbindung",
            es: "Enlace de energía",
            it: "Collegamento energetico",
            pt: "Energy Link",
          },
          effect: {
            en: "Search your discard pile for an Energy card and attach it to Delcatty.",
            ja: "廃棄物の山を検索して、エネルギーカードを添付し、それをDelcattyに取り付けます。",
            fr: "Recherchez votre tas de défausse pour une carte d'énergie et attachez-la à Delcatty.",
            de: "Suchen Sie Ihren Abwurfstapel nach einer Energiekarte und befestigen Sie sie an Delcatty.",
            es: "Busque en su pila de descarte en busca de una tarjeta de energía y adjuntarla a Delcatty.",
            it: "Cerca il tuo mucchio di scarti per una carta energetica e attaccalo a delcatty.",
            pt: "Pesquise sua pilha de descarte para obter um cartão de energia e anexe -o à Delcatty.",
          },
          damage: 20,
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Tail Whap",
            ja: "尾のwhap",
            fr: "Bap",
            de: "Schwanzpeak",
            es: "Cola whap",
            it: "Coda whap",
            pt: "Tail Whap",
          },
          damage: 40,
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

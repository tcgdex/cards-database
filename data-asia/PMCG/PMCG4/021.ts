import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Dark Wartortle",
         ja: "暗いwartortle",
         fr: "Wartortle sombre",
         de: "Dunkle Wartortle",
         es: "Wartortle oscuro",
         it: "Dark Wartortle",
         pt: "Dark Wartortorle",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [8],
      hp: 60,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Water"],
          name: {
            en: "Doubleslap",
            ja: "doubleslap",
            fr: "Double",
            de: "Doppelklappe",
            es: "Duplana",
            it: "Doppbleslap",
            pt: "Doubleslap",
          },
          effect: {
            en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
            ja: "2つのコインをフリップします。この攻撃は、ヘッド数の10倍のダメージを与えます。",
            fr: "Flip 2 pièces. Cette attaque fait 10 dégâts le nombre de têtes.",
            de: "2 Münzen umdrehen. Dieser Angriff verursacht 10 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 2 monedas. Este ataque hace 10 veces el número de cabezas.",
            it: "Flip 2 monete. Questo attacco fa 10 danni volte il numero di teste.",
            pt: "Flip 2 moedas. Este ataque causa 10 danos ao número do número de cabeças.",
          },
        },
        {
          cost: ["Water", "Colorless"],
          name: {
            en: "Mirror Shell",
            ja: "ミラーシェル",
            fr: "Coquille de miroir",
            de: "Spiegelschale",
            es: "Espejo",
            it: "Shell mirror",
            pt: "Casca de espelho",
          },
          effect: {
            en: "If an attack does damage to Dark Wartortle during your opponent's next turn (even if Dark Wartortle is Knocked Out), Dark Wartortle does an equal amount of damage to the Defending Pokemon.",
            ja: "攻撃が相手の次のターン中にダークワルトルートにダメージを与えた場合（ダークワルトルがノックアウトされたとしても）、ダークワルトルートルはディフェンディングポケモンに同量のダメージを与えます。",
            fr: "Si une attaque endommage à Dark Wartortle lors du prochain tour de votre adversaire (même si Dark Wartort est éliminé), Dark Wartortle fait une quantité égale de dégâts au Pokémon en défense.",
            de: "Wenn ein Angriff in der nächsten Runde Ihres Gegners in der nächsten Runde Ihres Gegners beschädigt wird (auch wenn Dark Wartortle ausgeschaltet wird), verursacht Dark Wartortle den verteidigenden Pokemon gleich.",
            es: "Si un ataque da daño a la verrugada oscura durante el próximo turno de tu oponente (incluso si Dark Wartortle es noqueada), Dark Wartortle hace una cantidad igual de daño al Pokémon defensor.",
            it: "Se un attacco fa danni a Dark WarTortle durante il prossimo turno del tuo avversario (anche se viene eliminato Dark Wartortle), Dark WarTorTle fa una parità di danno al Pokemon in difesa.",
            pt: "Se um ataque causar danos a Wartortle escuro durante o próximo turno do seu oponente (mesmo que o Wartortorle Dark seja nocauteado), o Dark Wartortle causa uma quantidade igual de dano ao Pokémon defensor.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};

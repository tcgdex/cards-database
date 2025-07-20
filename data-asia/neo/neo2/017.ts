import {Card} from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
      set: Set,
      name: {
         en: "Corsola",
         ja: "コルサラ",
         fr: "Corsola",
         de: "Korsola",
         es: "Corsola",
         it: "Corsola",
         pt: "Corsola",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [222],
      hp: 50,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Water"],
          name: {
            en: "Recover",
            ja: "回復する",
            fr: "Récupérer",
            de: "Genesen",
            es: "Recuperar",
            it: "Recuperare",
            pt: "Recuperar",
          },
          effect: {
            en: "Discard 1 Water Energy card attached to Corsola or this attack does nothing. Remove all damage counters from Corsola.",
            ja: "Corsolaに取り付けられた1つの水エネルギーカードを廃棄すると、この攻撃は何もしません。 Corsolaからすべてのダメージカウンターを削除します。",
            fr: "Jetez 1 carte d'énergie d'eau attachée à Corsola ou cette attaque ne fait rien. Retirez tous les compteurs de dégâts de Corsola.",
            de: "Laune 1 Wasserergiekarte, die an Korsola angebracht ist, oder dieser Angriff tut nichts. Entfernen Sie alle Schadenszähler von Korsola.",
            es: "Deseche 1 tarjeta de energía de agua unida a Corsola o este ataque no hace nada. Retire todos los contadores de daño de Corsola.",
            it: "Scartare 1 carta di energia idrica attaccata a Corsola o questo attacco non fa nulla. Rimuovere tutti i contatori di danno da Corsola.",
            pt: "Descarte 1 cartão de energia da água anexada a Corsola ou este ataque não faz nada. Remova todos os contadores de danos da Corsola.",
          },
        },
        {
          cost: ["Fighting", "Fighting"],
          name: {
            en: "Spike Cannon",
            ja: "スパイクキャノン",
            fr: "Canon à pointe",
            de: "Spike -Kanone",
            es: "Cañón de espiga",
            it: "Cannone a spike",
            pt: "Canhão de spike",
          },
          effect: {
            en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
            ja: "2つのコインをフリップします。この攻撃は、ヘッド数の30回のダメージ時間を実行します。",
            fr: "Flip 2 pièces. Cette attaque fait 30 dégâts de temps le nombre de têtes.",
            de: "2 Münzen umdrehen. Dieser Angriff verursacht 30 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 2 monedas. Este ataque hace 30 veces el número de cabezas.",
            it: "Flip 2 monete. Questo attacco fa 30 danni volte al numero di teste.",
            pt: "Flip 2 moedas. Este ataque causa 30 danos vezes o número de cabeças.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};

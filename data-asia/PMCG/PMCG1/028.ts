import {Card} from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Poliwhirl",
         ja: "PoliWhirl",
         fr: "Polihirl",
         de: "Poliwhirl",
         es: "Poliwhirl",
         it: "Poliwhirl",
         pt: "Poliwhirl",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [61],
      hp: 60,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Water", "Water"],
          name: {
            en: "Amnesia",
            ja: "健忘症",
            fr: "Amnésie",
            de: "Amnesie",
            es: "Amnesia",
            it: "Amnesia",
            pt: "Amnésia",
          },
          effect: {
            en: "Choose 1 of the Defending Pokemon's attacks. That Pokemon can't use that attack during your opponent's next turn.",
            ja: "防御ポケモンの攻撃の1つを選択します。そのポケモンは、相手の次のターン中にその攻撃を使用できません。",
            fr: "Choisissez 1 des attaques de Pokémon en défense. Ce Pokémon ne peut pas utiliser cette attaque lors du prochain tour de votre adversaire.",
            de: "Wählen Sie 1 der Angriffe des Verteidigungspokemons. Dieses Pokemon kann diesen Angriff in der nächsten Runde Ihres Gegners nicht verwenden.",
            es: "Elija 1 de los ataques defensores de Pokémon. Ese Pokémon no puede usar ese ataque durante el próximo turno de tu oponente.",
            it: "Scegli 1 degli attacchi del Pokemon in carica. Quel Pokemon non può usare quell'attacco durante il prossimo turno del tuo avversario.",
            pt: "Escolha 1 dos ataques de Pokémon em defesa. Esse Pokémon não pode usar esse ataque durante o próximo turno do seu oponente.",
          },
          damage: None,
        },
        {
          cost: ["Water", "Water", "Colorless"],
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
            en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
            ja: "2つのコインをフリップします。この攻撃は、ヘッド数の30回のダメージ時間を実行します。",
            fr: "Flip 2 pièces. Cette attaque fait 30 dégâts de temps le nombre de têtes.",
            de: "2 Münzen umdrehen. Dieser Angriff verursacht 30 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 2 monedas. Este ataque hace 30 veces el número de cabezas.",
            it: "Flip 2 monete. Questo attacco fa 30 danni volte al numero di teste.",
            pt: "Flip 2 moedas. Este ataque causa 30 danos vezes o número de cabeças.",
          },
          damage: None,
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
          subtype: "shadowless",
        },
        {
          type: "normal",
          subtype: "shadowless",
          stamp: ["1st edition"],
        },
      ],
};

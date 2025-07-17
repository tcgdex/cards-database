import {Card} from "../../../interfaces"
import Set from "../E2"

const card: Card = {
      set: Set,
      name: {
         en: "Smeargle",
         ja: "Smeargle",
         fr: "Tracas",
         de: "Schmierer",
         es: "Manchar",
         it: "Smalgle",
         pt: "Smeargle",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [235],
      hp: 60,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Paint Trick",
            ja: "ペイントトリック",
            fr: "Tour de peinture",
            de: "Malen Sie Trick",
            es: "Truco de pintura",
            it: "Trucco di verniciatura",
            pt: "Truque de tinta",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Confused. Then, choose 1 of your Benched Pokemon and switch Smeargle with it.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。次に、ベンチ付きポケモンの1つを選択し、スイミングスイッチを使用します。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant confus. Ensuite, choisissez 1 de votre pokemon bancé et changez de frottis avec lui.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokemon jetzt verwirrt. Wählen Sie dann 1 Ihrer Bank -Pokemon aus und schalten Sie mit ihm versendert.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está confundido. Luego, elija 1 de su pokemon de banca y cambie Smeargle con él.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora confuso. Quindi, scegli 1 del tuo Pokemon in panchina e cambia con esso.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon atual agora está confuso. Em seguida, escolha 1 do seu Pokémon em banco e mude de smeargle com ele.",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
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
            en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
            ja: "2つのコインをフリップします。この攻撃は、ヘッド数の20倍のダメージを与えます。",
            fr: "Flip 2 pièces. Cette attaque fait 20 dégâts de temps le nombre de têtes.",
            de: "2 Münzen umdrehen. Dieser Angriff verursacht 20 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 2 monedas. Este ataque hace 20 veces el número de cabezas.",
            it: "Flip 2 monete. Questo attacco fa 20 danni il numero di teste.",
            pt: "Flip 2 moedas. Este ataque causa 20 danos vezes o número de cabeças.",
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

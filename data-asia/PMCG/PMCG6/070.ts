import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Koga's Pidgeotto",
         ja: "コガのピッジット",
         fr: "Pidgeotto de Koga",
         de: "Kogas Pidgeotto",
         es: "Pidgeotto de Koga",
         it: "Koga's Pidgeotto",
         pt: "Pidgeotto de Koga",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [17],
      hp: 60,
      types: ["Colorless"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Quick Turn",
            ja: "クイックターン",
            fr: "Virage rapide",
            de: "Schnelle Kurve",
            es: "Giro rápido",
            it: "Turni rapidi",
            pt: "Virada rápida",
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
        {
          cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
          name: {
            en: "Aerial Maneuvers",
            ja: "空中操作",
            fr: "Manœuvres aériennes",
            de: "Luftmanöver",
            es: "Maniobras aéreas",
            it: "Manovre aeree",
            pt: "Manobras aéreas",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 10 damage plus 30 more damage, and, during your opponent's next turn, prevent all effects of attacks, including damage, done to Koga's Pidgeotto. If tails, this attack does 10 damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて30ダメージを与え、相手の次のターン中に、コガのピッジットに行われるダメージを含む攻撃のすべての影響を防ぎます。尾の場合、この攻撃は10ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 10 dégâts plus 30 dégâts supplémentaires et, au cours du prochain tour de votre adversaire, empêchent tous les effets des attaques, y compris les dégâts, causés au Pidgeotto de Koga. Si Tails, cette attaque fait 10 dégâts.",
            de: "Eine Münze drehen. Wenn Köpfe, dieser Angriff 10 Schäden plus 30 weitere Schäden verursacht und während der nächsten Kurve Ihres Gegners alle Auswirkungen von Angriffen, einschließlich Schäden an Kogas Pidgeotto, verhindern. Wenn Schwänze, verursacht dieser Angriff 10 Schaden.",
            es: "Voltea una moneda. Si las cabezas, este ataque hace 10 daños más 30 más de daño y, durante el próximo turno de tu oponente, evita que todos los efectos de los ataques, incluido el daño, se hagan a Pidgeotto de Koga. Si Tails, este ataque hace 10 daños.",
            it: "Capovolgi una moneta. Se le teste, questo attacco infligge 10 danni più 30 danni e, durante il prossimo turno dell'avversario, impediscono tutti gli effetti degli attacchi, inclusi i danni, fatti a Pidgeotto di Koga. Se le code, questo attacco infligge 10 danni.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 10 danos mais 30 danos e, durante o próximo turno do seu oponente, impedem todos os efeitos dos ataques, incluindo danos, causados ao Pidgeotto de Koga. Se caudas, esse ataque causa 10 danos.",
          },
        },
      ],


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

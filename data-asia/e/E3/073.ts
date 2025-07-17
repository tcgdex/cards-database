import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
      set: Set,
      name: {
         en: "Steelix - 073/087",
         ja: "Steelix -073/087",
         fr: "Steelix - 073/087",
         de: "Steelix - 073/087",
         es: "Steelix - 073/087",
         it: "STEASCEX - 073/087",
         pt: "Steelix - 073/087",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [208],
      hp: 100,
      types: ["Metal"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Earth Rift",
            ja: "地球の裂け目",
            fr: "Rift de la Terre",
            de: "Erdriss",
            es: "Rift de la tierra",
            it: "Rift di terra",
            pt: "Terra fenda",
          },
          effect: {
            en: "This attack does 10 damage to each of your opponent's Benched Pokemon. (Don't apply Weakness or Resistance for Benched Pokemon.) Then, flip a coin. If tails, this attack can't be used during your next turn.",
            ja: "この攻撃は、相手のベンチポケモンのそれぞれに10ダメージを与えます。 （ベンチポケモンに脱力や抵抗を適用しないでください。）次に、コインをひっくり返します。テールの場合、この攻撃は次のターン中に使用できません。",
            fr: "Cette attaque inflige 10 dégâts à chacun des pokemon bancés de votre adversaire. (N'appliquez pas la faiblesse ou la résistance pour les pokémon bancés.) Ensuite, retournez une pièce. Si Tails, cette attaque ne peut pas être utilisée pendant votre prochain tour.",
            de: "Dieser Angriff schädigt 10 das Bankpokémon Ihres Gegners. (Wenden Sie keine Schwäche oder Widerstand für ein Bankpokémon an.) Dann drehen Sie eine Münze um. Wenn Schwänze, kann dieser Angriff in Ihrer nächsten Kurve nicht verwendet werden.",
            es: "Este ataque hace 10 daños a cada Pokémon de banca de tu oponente. (No aplique debilidad o resistencia para Pokémon de banca). Luego, voltee una moneda. Si Tails, este ataque no se puede usar durante su próximo turno.",
            it: "Questo attacco infligge 10 danni a ciascuno dei Pokemon in panchina del tuo avversario. (Non applicare la debolezza o la resistenza per i Pokemon in panchina.) Quindi, capovolgi una moneta. Se coda, questo attacco non può essere usato durante il tuo prossimo turno.",
            pt: "Este ataque causa 10 danos a Pokémon com bancada do seu oponente. (Não aplique fraqueza ou resistência a Pokemon em bancada.) Em seguida, vire uma moeda. Se as caudas, esse ataque não poderá ser usado durante o próximo turno.",
          },
          damage: 10,
        },
        {
          cost: ["Metal", "Metal", "Colorless", "Colorless"],
          name: {
            en: "Iron Smash",
            ja: "アイアンスマッシュ",
            fr: "Smash de fer",
            de: "Iron Smash",
            es: "Smash de hierro",
            it: "Smash di ferro",
            pt: "Smash de ferro",
          },
          effect: {
            en: "Flip 2 coins. If both are heads, this attack does 50 damage plus 20 more damage. If both are tails, this attack does nothing. If 1 is heads and 1 is tails, this attack just does 50 damage.",
            ja: "2つのコインをフリップします。両方がヘッドである場合、この攻撃は50のダメージと20のダメージをさらに20回かけます。両方が尾の場合、この攻撃は何もしません。 1がヘッドで、1がテールの場合、この攻撃は50ダメージを与えます。",
            fr: "Flip 2 pièces. Si les deux sont des têtes, cette attaque fait 50 dégâts plus 20 dégâts supplémentaires. Si les deux sont des queues, cette attaque ne fait rien. Si 1 est la tête et 1 est la queue, cette attaque ne fait que 50 dégâts.",
            de: "2 Münzen umdrehen. Wenn beide Köpfe sind, verursacht dieser Angriff 50 Schäden plus 20 weitere Schäden. Wenn beide Schwänze sind, tut dieser Angriff nichts. Wenn 1 Köpfe und 1 Schwänze sind, verursacht dieser Angriff nur 50 Schaden.",
            es: "Flip 2 monedas. Si ambos son cabezas, este ataque hace 50 daños más 20 más de daño. Si ambas son colas, este ataque no hace nada. Si 1 es cabezas y 1 es colas, este ataque solo hace 50 daños.",
            it: "Flip 2 monete. Se entrambi sono teste, questo attacco infligge 50 danni più 20 danni in più. Se entrambi sono code, questo attacco non fa nulla. Se 1 è testa e 1 è coda, questo attacco fa solo 50 danni.",
            pt: "Flip 2 moedas. Se ambos são cabeças, esse ataque causará 50 danos mais 20 mais danos. Se ambos são caudas, esse ataque não faz nada. Se 1 é cabeças e 1 é cauda, esse ataque causa 50 danos.",
          },
        },
      ],

      retreat: 4,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};

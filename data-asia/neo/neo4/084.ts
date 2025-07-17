import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Shining Steelix",
         ja: "Shining Steelix",
         fr: "Shining Steelix",
         de: "Shining Steelix",
         es: "Steelix brillante",
         it: "Shining Stelix",
         pt: "Steelix brilhante",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [208],
      hp: 90,
      types: ["Metal"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Metal", "Metal", "Fighting", "Fighting"],
          name: {
            en: "Crushing Earth",
            ja: "地球を砕く",
            fr: "Terre écrasante",
            de: "Erde zerquetschen",
            es: "Tierra aplastante",
            it: "Terra schiacciante",
            pt: "Esmagando a terra",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 10 damage to each Benched Pokemon (yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokemon.) If tails, this attack does nothing. Either way, Shining Steelix can't attack during your next turn.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は各ベンチポケモン（あなたと相手）に10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）尾の場合、この攻撃は何もしません。いずれにせよ、Shining Steelixは次のターン中に攻撃することはできません。",
            fr: "Retourner une pièce. Si les têtes, cette attaque inflige 10 dégâts à chaque pokemon bancé (le vôtre et celui de votre adversaire). (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.) Si les queues, cette attaque ne fait rien. Quoi qu'il en soit, Shining Steelix ne peut pas attaquer pendant votre prochain tour.",
            de: "Eine Münze drehen. Wenn dieser Angriff auf jeden Bankpokémon (Ihr und Ihr Gegner) 10 Schaden zufügt. (Wenden Sie keine Schwäche und Widerstand für Bank -Pokémon an.) Wenn Schwänze dieser Angriff nichts unternehmen. In jedem Fall kann Shining Steelix in Ihrer nächsten Kurve nicht angreifen.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 10 daños a cada Pokémon en banca (el tuyo y el de tu oponente). (No aplique debilidad y resistencia para los Pokémon de banca). Si las colas, este ataque no hace nada. De cualquier manera, Shining Steelix no puede atacar durante su próximo turno.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 10 danni a ciascun Pokemon in panchina (il tuo e quello del tuo avversario). (Non applicare debolezza e resistenza per i Pokemon in panchina.) Se le code, questo attacco non fa nulla. Ad ogni modo, Shining Steilix non può attaccare durante il tuo prossimo turno.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 10 danos a cada Pokémon em banco (o seu e o seu oponente). (Não aplique fraqueza e resistência a Pokemon em bancada.) Se as caudas, esse ataque não faz nada. De qualquer maneira, o Shining Steelix não pode atacar durante o próximo turno.",
          },
          damage: 80,
        },
      ],

      retreat: 4,

};

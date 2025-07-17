import {Card} from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
      set: Set,
      name: {
         en: "Yanma",
         ja: "ヤンマ",
         fr: "Yanma",
         de: "Yanma",
         es: "Yanma",
         it: "Yanma",
         pt: "Yanma",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [193],
      hp: 60,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Shockwave",
            ja: "衝撃波",
            fr: "Onde de choc",
            de: "Schockwelle",
            es: "Onda de choque",
            it: "Onde d'urto",
            pt: "Onda de choque",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 10 damage to each of your opponent's Pokemon. Don't apply Weakness and Resistance. Then, if your opponent has any Benched Pokemon, he or she chooses 1 of them and switches it with the Defending Pokemon.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は相手の各ポケモンに10ダメージを与えます。衰弱と抵抗を適用しないでください。次に、相手がベンチポケモンを持っている場合、彼または彼女はそれらの1つを選択し、防御ポケモンでそれを切り替えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque inflige 10 dégâts à chacun des pokemon de votre adversaire. N'appliquez pas la faiblesse et la résistance. Ensuite, si votre adversaire a un pokemon banc, il en choisit l'un d'entre eux et le change avec le Pokémon en défense.",
            de: "Eine Münze drehen. Wenn dieser Angriff auf den Pokémon Ihres Gegners 10 Schaden zufügt. Wenden Sie keine Schwäche und Widerstand an. Wenn Ihr Gegner ein Bank -Pokemon hat, wählt er oder sie 1 davon aus und schaltet es mit dem verteidigenden Pokemon.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 10 daños a cada Pokémon de tu oponente. No aplique debilidad y resistencia. Entonces, si tu oponente tiene algún Pokémon de banca, él o ella elige 1 de ellos y lo cambia con el Pokémon defensor.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 10 danni a ciascuno dei Pokemon del tuo avversario. Non applicare debolezza e resistenza. Quindi, se il tuo avversario ha dei Pokemon in panchina, ne sceglie uno e lo cambia con il Pokemon in carica.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 10 danos a cada um dos Pokémon do seu oponente. Não aplique fraqueza e resistência. Então, se o seu oponente tiver algum Pokémon em banco, ele escolhe 1 deles e o troca com o Pokémon atual.",
          },
        },
        {
          cost: ["Grass", "Grass", "Grass"],
          name: {
            en: "Swift",
            ja: "迅速",
            fr: "Rapide",
            de: "Schnell",
            es: "Rápido",
            it: "Swift",
            pt: "Swift",
          },
          effect: {
            en: "This attack's damage isn't affected by Weakness, Resistance, Pokemon Powers, or any other effects on the Defending Pokemon.",
            ja: "この攻撃の損傷は、衰弱、抵抗、ポケモンの力、または防御ポケモンに対するその他の影響の影響を受けません。",
            fr: "Les dommages de cette attaque ne sont pas affectés par la faiblesse, la résistance, les pouvoirs de pokemon ou tout autre effet sur le Pokémon en défense.",
            de: "Der Schaden dieses Angriffs ist nicht durch Schwäche, Widerstand, Pokemon -Kräfte oder andere Auswirkungen auf das verteidigende Pokemon beeinflusst.",
            es: "El daño de este ataque no se ve afectado por la debilidad, la resistencia, los poderes de Pokémon o cualquier otro efecto en el Pokémon defensor.",
            it: "Il danno di questo attacco non è influenzato da debolezza, resistenza, poteri di Pokemon o altri effetti sul Pokemon in difesa.",
            pt: "Os danos desse ataque não são afetados pela fraqueza, resistência, poderes de Pokemon ou quaisquer outros efeitos no pokemon atual.",
          },
          damage: 30,
        },
      ],


      variants: [
        {
          type: "holo",
        },
      ],
};

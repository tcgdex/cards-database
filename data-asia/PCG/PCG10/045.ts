import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
      set: Set,
      name: {
         en: "Machamp",
         ja: "マチャンプ",
         fr: "Machamp",
         de: "Machamp",
         es: "Machamp",
         it: "Machamp",
         pt: "Machamp",
      },


      category: "Pokemon",
      dexId: [68],
      hp: 120,
      types: ["Fighting"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Overzealous",
            ja: "熱心",
            fr: "Trop zélé",
            de: "Übereifrig",
            es: "Demasiado entusiasta",
            it: "Troppo zelante",
            pt: "Superzeal",
          },
          effect: {
            en: "If your opponent has any PokÃ©mon-ex in play, each of Machamp's attacks do 30 more damage to the Defending PokÃ©mon.",
            ja: "対戦相手がPokã©Mon-Exをプレイしている場合、Machampのそれぞれの攻撃は、防御するPokã©Monに30回以上のダメージを与えます。",
            fr: "Si votre adversaire a un jeu de jeu en jeu, chacune des attaques de Machamp fait 30 dommages supplémentaires aux Poké en défense.",
            de: "Wenn Ihr Gegner einen Poké-Mon-EX im Spiel hat, verursacht jede Angriffe von Machamp 30 weitere Schaden für den verteidigenden Poké © Mon.",
            es: "Si tu oponente tiene algún Poké Mon-Ex en juego, cada uno de los ataques de Machamp hace 30 daños más al Poké Mon.",
            it: "Se il tuo avversario ha qualche poké mon-ex in gioco, ciascuno degli attacchi di Machamp fa altri 30 danni al poké mon.",
            pt: "Se o seu oponente tiver algum Poké Mon-Ex em jogo, cada um dos ataques de Machamp causar mais 30 danos ao defesa do Poké.",
          },
      }],

      attacks: [
        {
          cost: ["Fighting", "Colorless"],
          name: {
            en: "Brick Smash",
            ja: "ブリックスマッシュ",
            fr: "Smash en brique",
            de: "Brick Smash",
            es: "Chasquido",
            it: "Brick Smash",
            pt: "Brick Smash",
          },
          effect: {
            en: "This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokemon.",
            ja: "この攻撃の損傷は、脱力感、抵抗、ポケの提唱、ポケボディ、または防御ポケモンに対するその他の影響の影響を受けません。",
            fr: "Les dommages de cette attaque ne sont pas affectés par la faiblesse, la résistance, les poké-powers, les poké-corps ou tout autre effet sur le Pokémon en défense.",
            de: "Der Schaden dieses Angriffs ist nicht von Schwäche, Widerstand, Poké-Pächtern, Poké-Körpern oder anderen Auswirkungen auf das verteidigende Pokémon beeinflusst.",
            es: "El daño de este ataque no se ve afectado por la debilidad, la resistencia, los poké-powers, los cuerpos de los poké o los otros efectos en el Pokémon defensor.",
            it: "Il danno di questo attacco non è influenzato da debolezza, resistenza, Poké-Powers, Poké-Bodies o qualsiasi altro effetto sul Pokemon in difesa.",
            pt: "Os danos desse ataque não são afetados pela fraqueza, resistência, poké-powers, corpos de poké ou quaisquer outros efeitos no pokemon atual.",
          },
          damage: 40,
        },
        {
          cost: ["Fighting", "Colorless", "Colorless"],
          name: {
            en: "Cross Chop",
            ja: "クロスチョップ",
            fr: "Hacher",
            de: "Cross Chop",
            es: "Picar",
            it: "Cross Chop",
            pt: "Cruz Chop",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 60 damage plus 30 more damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は60のダメージに加えて30ダメージを与えます。",
            fr: "Retourner une pièce. Si la tête, cette attaque fait 60 dégâts plus 30 dégâts supplémentaires.",
            de: "Eine Münze drehen. Bei Köpfen verursacht dieser Angriff 60 Schäden plus 30 weitere Schäden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 60 daños más 30 más de daño.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 60 danni più 30 danni in più.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 60 danos mais 30 mais danos.",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
          subtype: "unlimited',
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};

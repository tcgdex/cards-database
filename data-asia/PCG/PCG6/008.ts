import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Volbeat",
         ja: "volbeat",
         fr: "Volbeat",
         de: "Volbeat",
         es: "Volbeat",
         it: "Volbeat",
         pt: "Volbeat",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [313],
      hp: 60,
      types: ["Grass"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Extra Protection",
            ja: "余分な保護",
            fr: "Protection supplémentaire",
            de: "Zusätzlicher Schutz",
            es: "Protección adicional",
            it: "Protezione extra",
            pt: "Proteção extra",
          },
          effect: {
            en: "As long as you have Illumise in play, prevent all effects, including damage, done to Volbeat by attacks from your opponent's PokÃ©mon-ex.",
            ja: "プレイ中に照らされている限り、対戦相手のPokã©Mon-Exからの攻撃によってVolbeatに行われる損傷を含むすべての効果を防ぎます。",
            fr: "Tant que vous avez illuminé dans le jeu, empêchez tous les effets, y compris les dégâts, faits à Volbeat par des attaques de la Poké de votre adversaire.",
            de: "Solange Sie im Spiel beleuchtet sind, verhindern Sie alle Effekte, einschließlich Schäden, die durch Angriffe aus dem Poké-Mon-EX Ihres Gegners zu tun haben.",
            es: "Mientras haya iluminado en el juego, evite que todos los efectos, incluido el daño, se hagan a Volbeat por ataques de Poké de su oponente.",
            it: "Finché ti sei illuminato in gioco, prevenire tutti gli effetti, compresi i danni, eseguiti a Volbeat dagli attacchi dal poké Mon-ex del tuo avversario.",
            pt: "Enquanto você iluminar em jogo, evite todos os efeitos, incluindo danos, causados ao Volbeat por ataques do Poké Mon-Ex do seu oponente.",
          },
      }],

      attacks: [
        {
          cost: ["Grass", "Colorless"],
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
            en: "This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokemon.",
            ja: "この攻撃の損傷は、脱力感、抵抗、ポケの提唱、ポケボディ、または防御ポケモンに対するその他の影響の影響を受けません。",
            fr: "Les dommages de cette attaque ne sont pas affectés par la faiblesse, la résistance, les poké-powers, les poké-corps ou tout autre effet sur le Pokémon en défense.",
            de: "Der Schaden dieses Angriffs ist nicht von Schwäche, Widerstand, Poké-Pächtern, Poké-Körpern oder anderen Auswirkungen auf das verteidigende Pokémon beeinflusst.",
            es: "El daño de este ataque no se ve afectado por la debilidad, la resistencia, los poké-powers, los cuerpos de los poké o los otros efectos en el Pokémon defensor.",
            it: "Il danno di questo attacco non è influenzato da debolezza, resistenza, Poké-Powers, Poké-Bodies o qualsiasi altro effetto sul Pokemon in difesa.",
            pt: "Os danos desse ataque não são afetados pela fraqueza, resistência, poké-powers, corpos de poké ou quaisquer outros efeitos no pokemon atual.",
          },
          damage: 30,
        },
      ],

      retreat: 1,

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

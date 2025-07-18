import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Hitmonchan",
         ja: "ヒットモンチャン",
         fr: "Hitmonchan",
         de: "Hitmonchan",
         es: "Hitmonchan",
         it: "Hitmonchan",
         pt: "Hitmnchan",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [107],
      hp: 70,
      types: ["Fighting"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Stages of Evolution",
            ja: "進化の段階",
            fr: "Étapes de l'évolution",
            de: "Evolutionsphasen",
            es: "Etapas de evolución",
            it: "Fase dell'evoluzione",
            pt: "Estágios da evolução",
          },
          effect: {
            en: "As long as Hitmonchan is an Evolved PokÃ©mon, Hitmonchan gets +30 HP.",
            ja: "Hitmonchanが進化したポカモンである限り、Hitmonchanは+30 HPを取得します。",
            fr: "Tant que Hitmonchan est un poké évolué, Hitmonchan obtient +30 ch.",
            de: "Solange Hitmonchan ein weiterentwickelter Pokémon ist, erhält Hitmonchan +30 PS.",
            es: "Mientras Hitmonchan sea un Poké Mon evolucionado, Hitmonchan obtiene +30 hp.",
            it: "Finché Hitmonchan è un poké evoluto, Hitmonchan ottiene +30 CV.",
            pt: "Enquanto Hitmonchan for um Poké -Mon evoluído, Hitmonchan recebe +30 hp.",
          },
      }],

      attacks: [
        {
          cost: ["Fighting", "Colorless"],
          name: {
            en: "Heavy Punch",
            ja: "重いパンチ",
            fr: "Coup de poing",
            de: "Schwerer Schlag",
            es: "Golpe fuerte",
            it: "Punch pesante",
            pt: "Punto pesado",
          },
          effect: {
            en: "Does 10 damage times the number of your opponent's Benched Pokemon.",
            ja: "対戦相手のベンチポケモンの数を10回ダメージします。",
            fr: "Fait 10 dégâts fois le nombre de Pokémon bancés de votre adversaire.",
            de: "Hat 10 Schadenszeiten die Anzahl der Bankpokémon Ihres Gegners.",
            es: "Hace 10 tiempos de daño el número de Pokémon de banca de tu oponente.",
            it: "Fa 10 danni volte il numero del Pokemon in panchina del tuo avversario.",
            pt: "10 danos vezes o número do Pokémon em banco do seu oponente.",
          },
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Speedy Uppercut",
            ja: "スピーディーアッパーカット",
            fr: "Uppercut rapide",
            de: "Schnelles Oberschnitt",
            es: "Uppercut rápido",
            it: "Specido Uppercut",
            pt: "Uppercut rápido",
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
          damage: 50,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};

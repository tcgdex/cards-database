import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Hariyama",
         ja: "麻山",
         fr: "Hariyama",
         de: "Hariyama",
         es: "Hariyama",
         it: "Hariyama",
         pt: "Hariyama",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [297],
      hp: 80,
      types: ["Fighting"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Reversal Aura",
            ja: "反転オーラ",
            fr: "Aura d'inversion",
            de: "Umkehraura",
            es: "Aura de inversión",
            it: "Aura di inversione",
            pt: "Aura reversa",
          },
          effect: {
            en: "As long as you have more Prize cards left than your opponent, each of Hariyama's attacks does 20 more damage to the Active PokÃ©mon (before applying Weakness and Resistance) and damage done by the Active PokÃ©mon to Hariyama is reduced by 20 (after applying Weakness and Resistance).",
            ja: "相手よりも多くの賞品が残っている限り、Hariyamaのそれぞれの攻撃は、アクティブなポカモン（脱力感と抵抗を適用する前に）に20個のダメージを与え、アクティブポカモンによって行われたダメージが20倍になります（衰弱と抵抗を適用した後）。",
            fr: "Tant qu'il vous reste plus de cartes de prix que votre adversaire, chacune des attaques de Hariyama fait 20 dommages supplémentaires aux Poké actifs (avant d'appliquer une faiblesse et une résistance) et des dommages causés par le Poké actif à Hariyama est réduit de 20 (après avoir appliqué la faiblesse et la résistance).",
            de: "Solange Sie mehr Preiskarten mehr haben als Ihr Gegner, verursacht jede Angriffe von Hariyama 20 weitere Schäden an den aktiven Poké Mon (bevor Sie Schwäche und Widerstand anwenden) und Schäden durch den aktiven Poké Mon mon auf Hariyama um 20 (nach Anwendung von Schwäche und Widerstand) reduziert werden.",
            es: "Mientras le queden más tarjetas de premios que su oponente, cada uno de los ataques de Hariyama hace 20 daños más al Poké Mon activo (antes de aplicar la debilidad y la resistencia) y el daño hecho por el Poké Activo a Hariyama se reduce en 20 (después de aplicar debilidad y resistencia).",
            it: "Finché ti rimangono più carte premiate rispetto al tuo avversario, ciascuno degli attacchi di Hariyama fa 20 danni in più al poké attivo (prima di applicare debolezza e resistenza) e il danno causato dal poké attivo di Hariyama è ridotto di 20 (dopo aver applicato la debolezza e la resistenza).",
            pt: "Enquanto você tiver mais cartões de prêmios que o seu oponente, cada um dos ataques de Hariyama causa mais 20 danos ao Poké Mon ativo (antes de aplicar fraqueza e resistência) e os danos causados pelo Poké Mon ativo a Hariyama são reduzidos em 20 (após aplicar fraqueza e resistência).",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Slap Push",
            ja: "スラッププッシュ",
            fr: "Claque",
            de: "Slap -Druck",
            es: "Empuje de bofetada",
            it: "Spinta schiaffo",
            pt: "Slap push",
          },
          damage: 30,
        },
        {
          cost: ["Fighting", "Fighting", "Colorless"],
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
            en: "This attack's damage isn't affected by Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokemon.",
            ja: "この攻撃の損傷は、抵抗、ポケの提唱、ポケボディ、または防御ポケモンに対するその他の影響の影響を受けません。",
            fr: "Les dommages de cette attaque ne sont pas affectés par la résistance, les poké-powers, les poké-corps ou tout autre effet sur le Pokémon en défense.",
            de: "Der Schaden dieses Angriffs ist nicht von Widerstand, Poké-Powers, Pokékörper oder anderen Auswirkungen auf das verteidigende Pokémon betroffen.",
            es: "El daño de este ataque no se ve afectado por la resistencia, los poké-powers, los cuerpos de los poké o ningún otro efecto en el Pokémon defensor.",
            it: "Il danno di questo attacco non è influenzato da resistenza, Poké-Powers, Poké-Bodies o altri effetti sul Pokemon in carica.",
            pt: "Os danos desse ataque não são afetados pela resistência, poké-powers, corpos de poké ou quaisquer outros efeitos no pokemon atual.",
          },
          damage: 50,
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

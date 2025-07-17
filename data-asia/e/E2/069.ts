import {Card} from "../../../interfaces"
import Set from "../E2"

const card: Card = {
      set: Set,
      name: {
         en: "Houndour - 069/092",
         ja: "Houndour -069/092",
         fr: "Houndour - 069/092",
         de: "Houndour - 069/092",
         es: "Houndour - 069/092",
         it: "Houndaur - 069/092",
         pt: "Houndour - 069/092",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [228],
      hp: 50,
      types: ["Darkness"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Darkness", "Colorless"],
          name: {
            en: "Feint Attack",
            ja: "FEINT攻撃",
            fr: "Attaque feinte",
            de: "Scheinangriff",
            es: "Ataques finos",
            it: "Attacco di finta",
            pt: "Ataque de finse",
          },
          effect: {
            en: "Choose 1 of your opponent's Pokemon. This attack does 20 damage to that Pokemon. This attack's damage isn't affected by Weakness, Resistance, Pok?-Powers, Pok?-Bodies, or any other effects on that Pokemon.",
            ja: "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに20のダメージを与えます。この攻撃の損傷は、脱力感、抵抗、pok？ -  powers、pok？bodies、またはそのポケモンに対するその他の影響の影響を受けません。",
            fr: "Choisissez 1 du pokemon de votre adversaire. Cette attaque fait 20 dégâts à ce Pokémon. Les dommages de cette attaque ne sont pas affectés par la faiblesse, la résistance, les pok? -Powers, Pok? -Bodies ou tout autre effet sur ce pokemon.",
            de: "Wählen Sie 1 des Pokémon Ihres Gegners. Dieser Angriff schädigt dieses Pokémon 20. Der Schaden dieses Angriffs ist nicht von Schwäche, Widerstand, Pok? -Anteilen, Pok? -Boden oder anderen Auswirkungen auf dieses Pokémon betroffen.",
            es: "Elija 1 de Pokémon de tu oponente. Este ataque hace 20 daños a ese Pokémon. El daño de este ataque no se ve afectado por la debilidad, la resistencia, el POK? -Poters, POK? Los cuerpos o los otros efectos en ese Pokémon.",
            it: "Scegli 1 Pokemon del tuo avversario. Questo attacco fa 20 danni a quel Pokemon. Il danno di questo attacco non è influenzato da debolezza, resistenza, Pok? -Powers, Pok? -Bodies o altri effetti su quel Pokemon.",
            pt: "Escolha 1 do Pokémon do seu oponente. Este ataque causa 20 danos a esse Pokémon. Os danos desse ataque não são afetados pela fraqueza, resistência, pok? -Wers, pok?-Corpos ou quaisquer outros efeitos nesse Pokemon.",
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

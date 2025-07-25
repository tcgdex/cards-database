import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         en: "Ledian - 007/088",
         ja: "Ledian -007/088",
         fr: "Ledian - 007/088",
         de: "LEDIAN - 007/088",
         es: "Ledian - 007/088",
         it: "LEDIAN - 007/088",
         pt: "LEDIAN - 007/088",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [166],
      hp: 70,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Pollen Shield",
            ja: "花粉シールド",
            fr: "Bouclier de pollen",
            de: "Pollenschild",
            es: "Escudo de polen",
            it: "Shield di polline",
            pt: "Escudo de pólen",
          },
          effect: {
            en: "During your opponent's next turn, Ledian can't become affected by a Special Condition. (Any other effects of attacks, Pok?-Powers, Pok?-Bodies, and Trainer cards still happen.)",
            ja: "対戦相手の次のターン中に、Ledianは特別な状態の影響を受けることはできません。 （攻撃、pok？-powers、pok？-bodies、およびトレーナーカードの他の効果はまだ発生しています。）",
            fr: "Au cours du prochain tour de votre adversaire, Ledian ne peut pas être affecté par une condition spéciale. (Tous les autres effets des attaques, Pok? -Powers, Pok? -Bodies et cartes Trainer se produisent toujours.)",
            de: "Während der nächsten Kurve Ihres Gegners kann LEDian nicht von einem besonderen Zustand betroffen sein. (Irgendwelche anderen Auswirkungen von Angriffen, Pok? -Anteilen, Pok? -Boden und Trainerkarten passieren immer noch.)",
            es: "Durante el próximo turno de tu oponente, Ledian no puede verse afectado por una condición especial. (Cualquier otro efecto de ataques, Pok? -Poters, Pok? -Bodies y cartas de entrenador aún ocurren).",
            it: "Durante il prossimo turno del tuo avversario, LeDian non può essere influenzato da una condizione speciale. (Altri effetti di attacchi, poker? -Powers, pok? -Bodies e carte allenatore ancora accadono.)",
            pt: "Durante o próximo turno do seu oponente, Ledian não pode se afetar por uma condição especial. (Algum outros efeitos de ataques, Pok? -Wowers, Pok? -Bodies e cartões de treinador ainda acontecem.)",
          },
          damage: 10,
        },
        {
          cost: ["Grass", "Grass", "Colorless"],
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
            en: "This attack's damage isn't affected by Weakness, Resistance, Pok?-Powers, Pok?-Bodies, or any other effects on the Defending Pokemon.",
            ja: "この攻撃の損傷は、脱力感、抵抗、pok？-Powers、pok？-bodies、または防御ポケモンに対するその他の影響の影響を受けません。",
            fr: "Les dommages de cette attaque ne sont pas affectés par la faiblesse, la résistance, les pok? -Powers, Pok? -Bodies ou tout autre effet sur le Pokémon en défense.",
            de: "Der Schaden dieses Angriffs ist nicht von Schwäche, Widerstand, Pok? -Anteilen, Pok? -Boden oder anderen Auswirkungen auf das verteidigende Pokémon betroffen.",
            es: "El daño de este ataque no se ve afectado por la debilidad, la resistencia, POK? -Poters, POK? Los cuerpos o los otros efectos en el Pokémon defensor.",
            it: "Il danno di questo attacco non è influenzato da debolezza, resistenza, Pok? -Powers, Pok? -Bodies o altri effetti sul Pokemon in difesa.",
            pt: "Os danos desse ataque não são afetados pela fraqueza, resistência, pok? -Wers, pok?-Corpos ou outros efeitos no defesa do Pokemon.",
          },
          damage: 50,
        },
      ],


      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};

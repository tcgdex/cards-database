import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
         en: "Seaking",
         ja: "航海",
         fr: "Coulant",
         de: "Seckung",
         es: "Pasta",
         it: "Seaking",
         pt: "Seaking",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [119],
      hp: 70,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Water"],
          name: {
            en: "Water Arrow",
            ja: "水の矢",
            fr: "Flèche d'eau",
            de: "Wasserpfeil",
            es: "Flecha de agua",
            it: "Freccia d'acqua",
            pt: "Seta de água",
          },
          effect: {
            en: "Choose 1 of your opponent's Pokemon. This attack does 20 damage to that Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに20のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Choisissez 1 du pokemon de votre adversaire. Cette attaque fait 20 dégâts à ce Pokémon. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Wählen Sie 1 des Pokémon Ihres Gegners. Dieser Angriff schädigt dieses Pokémon 20. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Elija 1 de Pokémon de tu oponente. Este ataque hace 20 daños a ese Pokémon. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Scegli 1 Pokemon del tuo avversario. Questo attacco fa 20 danni a quel Pokemon. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Escolha 1 do Pokémon do seu oponente. Este ataque causa 20 danos a esse Pokémon. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Fast Stream",
            ja: "高速ストリーム",
            fr: "Flux rapide",
            de: "Schneller Stream",
            es: "Flujo rápido",
            it: "Flusso veloce",
            pt: "Fluxo rápido",
          },
          effect: {
            en: "Move 1 Energy card attached to the Defending Pokemon to the other Defending Pokemon. (Ignore this effect if your opponent has only 1 Defending Pokemon.)",
            ja: "防御ポケモンに取り付けられた1つのエネルギーカードを他の防御ポケモンに移動します。 （対戦相手が1つの防御ポケモンしか持っていない場合、この効果を無視してください。）",
            fr: "Déplacez 1 carte d'énergie attachée au Pokémon en défense à l'autre Pokémon en défense. (Ignorez cet effet si votre adversaire n'a qu'un seul Pokémon défendant.)",
            de: "Verschieben Sie 1 Energiemoniemoni, die an das verteidigende Pokémon an das andere verteidigende Pokémon angebracht sind. (Ignorieren Sie diesen Effekt, wenn Ihr Gegner nur 1 verteidigendes Pokémon hat.)",
            es: "Mueva 1 tarjeta de energía unida al Pokémon defensor al otro Pokémon defensor. (Ignora este efecto si tu oponente solo tiene 1 defensora de Pokémon).",
            it: "Sposta 1 carta di energia collegata al Pokemon in carica all'altro Pokemon in difesa. (Ignora questo effetto se il tuo avversario ha solo 1 Pokemon in difesa.)",
            pt: "Mova 1 cartão de energia ligado ao Pokémon atual para o outro Pokémon defensor. (Ignore esse efeito se o seu oponente tiver apenas 1 Pokemon defensor.)",
          },
          damage: 30,
        },
      ],


      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};

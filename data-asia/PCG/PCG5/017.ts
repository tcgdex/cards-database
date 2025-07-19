import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Magmar",
         ja: "マグマー",
         fr: "Magmar",
         de: "Magmar",
         es: "Magmar",
         it: "Magmar",
         pt: "Magmar",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [126],
      hp: 70,
      types: ["Fire"],
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
            en: "As long as Magmar is an Evolved PokÃ©mon, all Energy attached to Magmar are Fire Energy instead of their usual types.",
            ja: "マグマーが進化したポカモンである限り、マグマーに付着したすべてのエネルギーは通常のタイプではなく火災エネルギーです。",
            fr: "Tant que Magmar est un poké évolué, toute l'énergie attachée à Magmar est l'énergie du feu au lieu de leurs types habituels.",
            de: "Solange Magmar ein entwickeltes Pokémon ist, ist die gesamte Energie, die mit Magmar verbunden ist, anstelle ihrer üblichen Typen.",
            es: "Mientras Magmar sea un Poké Mon evolucionado, toda la energía unida a Magmar son energía de fuego en lugar de sus tipos habituales.",
            it: "Finché Magmar è un poké evolutivo, tutta l'energia attaccata a Magmar sono energia antincendio anziché i loro soliti tipi.",
            pt: "Enquanto Magmar for um Poké -Mon evoluído, toda a energia ligada ao Magmar é energia de fogo em vez de seus tipos habituais.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Linear Attack",
            ja: "線形攻撃",
            fr: "Attaque linéaire",
            de: "Linearer Angriff",
            es: "Ataque lineal",
            it: "Attacco lineare",
            pt: "Ataque linear",
          },
          effect: {
            en: "Choose 1 of your opponent's Pokemon. This attack does 10 damage to that Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Choisissez 1 du pokemon de votre adversaire. Cette attaque fait 10 dégâts à ce Pokémon. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Wählen Sie 1 des Pokémon Ihres Gegners. Dieser Angriff schädigt dieses Pokémon 10. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Elija 1 de Pokémon de tu oponente. Este ataque hace 10 daños a ese Pokémon. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Scegli 1 Pokemon del tuo avversario. Questo attacco fa 10 danni a quel Pokemon. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Escolha 1 do Pokémon do seu oponente. Este ataque causa 10 danos a esse Pokémon. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
        },
        {
          cost: ["Fire", "Fire", "Fire"],
          name: {
            en: "Burning Sensation",
            ja: "燃えるような感覚",
            fr: "Sensation de brûlure",
            de: "Brenngefühl",
            es: "Sensación de ardor",
            it: "Sensazione di combustione",
            pt: "Sensação de queimação",
          },
          effect: {
            en: "If the Defending Pokemon already has any damage counters on it, the Defending Pokemon is now Burned.",
            ja: "防衛ポケモンがすでにダメージカウンターを持っている場合、防御ポケモンは燃やされています。",
            fr: "Si le Pokémon en défense a déjà des compteurs de dégâts, le Pokémon en défense est maintenant brûlé.",
            de: "Wenn das verteidigende Pokémon bereits Schadenszähler hat, wird das verteidigende Pokémon nun verbrannt.",
            es: "Si el Pokémon defensor ya tiene algún contador de daño, el Pokémon defensor ahora se quema.",
            it: "Se il Pokemon in carica ha già contatori di danno, il Pokemon in carica viene ora bruciato.",
            pt: "Se o Pokémon atual já tiver algum contador de danos, o Pokémon atual agora está queimado.",
          },
          damage: 40,
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

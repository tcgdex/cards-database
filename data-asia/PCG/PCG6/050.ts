import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Gardevoir (Delta Species)",
         ja: "gardevoir（デルタ種）",
         fr: "GardeVoir (espèces delta)",
         de: "Gardevoir (Delta -Arten)",
         es: "Gardevoir (especie delta)",
         it: "Gardevoir (Delta Species)",
         pt: "Gardevoir (espécie Delta)",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [282],
      hp: 100,
      types: ["Psychic"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Energy Jump",
            ja: "エネルギージャンプ",
            fr: "Saut d'énergie",
            de: "Energiesprung",
            es: "Salto de energía",
            it: "Salto di energia",
            pt: "Salto de energia",
          },
          effect: {
            en: "Once during your turn (before your attack), you may move an Energy card attached to 1 of your PokÃ©mon to another of your PokÃ©mon. This power can't be used if Gardevoir is affected by a Special Condition.",
            ja: "ターン中に（攻撃の前に）、ポカンの1つにアタッチされたエネルギーカードを別のポケモンに移動できます。 Gardevoirが特別な状態の影響を受けている場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez déplacer une carte d'énergie attachée à 1 de votre poké mon à un autre de votre poké. Ce pouvoir ne peut pas être utilisé si GardeVoir est affecté par une condition spéciale.",
            de: "Einmal während Ihres Zuges (vor Ihrem Angriff) können Sie eine an 1 Ihres Poké Mons an einen anderen Ihrer Pokémon angeschlossenen Energiekarte verschieben. Diese Kraft kann nicht eingesetzt werden, wenn Gardevoir von einem besonderen Zustand betroffen ist.",
            es: "Una vez durante su turno (antes de su ataque), puede mover una tarjeta de energía unida a 1 de su Poké Mon a otro de su Poké Mon. Este poder no se puede usar si Gardevoir se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno (prima del tuo attacco), puoi spostare una carta di energia collegata a 1 del tuo poké a un altro del tuo poké mon. Questo potere non può essere usato se Gardevoir è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), você pode mover um cartão de energia conectado a 1 do seu Poké Mon para outro de seu Poké. Esse poder não pode ser usado se Gardevoir for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Metal", "Colorless"],
          name: {
            en: "Psychic Rage",
            ja: "サイキックレイジ",
            fr: "Rage psychique",
            de: "Psychische Wut",
            es: "Rabia psíquica",
            it: "Rabbia psichica",
            pt: "Raiva psíquica",
          },
          effect: {
            en: "Choose 1 of your opponent's Pokemon. This attack does 10 damage for each damage counter on Gardevoir to that Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに対するGardevoirの各ダメージカウンターに対して10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Choisissez 1 du pokemon de votre adversaire. Cette attaque fait 10 dégâts pour chaque compteur de dégâts sur GardEVoir à ce Pokémon. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Wählen Sie 1 des Pokémon Ihres Gegners. Dieser Angriff verursacht 10 Schaden für jeden Schadenschalter auf Gardevoir zu diesem Pokémon. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Elija 1 de Pokémon de tu oponente. Este ataque hace 10 daños por cada mostrador de daño en Gardevoir a ese Pokémon. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Scegli 1 Pokemon del tuo avversario. Questo attacco infligge 10 danni per ciascun contatore di danni su Gardevoir a quel Pokemon. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Escolha 1 do Pokémon do seu oponente. Este ataque causa 10 danos para cada balcão de danos em Gardevoir a esse Pokemon. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
        },
        {
          cost: ["Psychic", "Colorless", "Colorless"],
          name: {
            en: "Black Magic",
            ja: "ブラックマジック",
            fr: "Magie noire",
            de: "Schwarze Magie",
            es: "Magia negra",
            it: "Magia nera",
            pt: "Magia negra",
          },
          effect: {
            en: "Does 10 damage plus 20 more damage times the number of your opponent's Benched Pokemon.",
            ja: "10ダメージに加えて、対戦相手のベンチポケモンの数のダメージがさらにさらに多くなります。",
            fr: "Fait 10 dégâts plus 20 dégâts de plus du nombre de pokemon bancés de votre adversaire.",
            de: "Fügt 10 Schäden plus 20 weitere Schadenszeiten die Anzahl der Bankpokémon Ihres Gegners.",
            es: "Hace 10 daños más 20 veces más de daño el número de Pokémon de banca de tu oponente.",
            it: "Fa 10 danni più 20 volte in più il numero del Pokemon in panchina del tuo avversario.",
            pt: "10 danos mais 20 mais danos vezes o número do Pokémon em bancada do seu oponente.",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
          stamp: ["1st edition"],
        },
        {
          type: "holo",
          subtype: "unlimited",
        },
      ],
};

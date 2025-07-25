import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
         en: "Cacturne (Delta Species)",
         ja: "サボテン（デルタ種）",
         fr: "Cacurne (espèces delta)",
         de: "Kakturne (Delta -Arten)",
         es: "Cacturne (especie delta)",
         it: "CacTurne (Delta Species)",
         pt: "Cacturne (espécie Delta)",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [332],
      hp: 80,
      types: ["Fighting"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Spike Storm",
            ja: "スパイクストーム",
            fr: "Tempête de pointe",
            de: "Spike Storm",
            es: "Tormenta de pico",
            it: "Spike Storm",
            pt: "Tempestade de pico",
          },
          effect: {
            en: "Once during your turn (before your attack), if Cacturne is your Active PokÃ©mon, you may put 1 damage counter on 1 of your opponent's PokÃ©mon that already has any damage counters on it. This power can't be used if Cacturne is affected by a Special Condition.",
            ja: "ターン中（攻撃の前に）、CacturneがアクティブなPokã©Monである場合、既にダメージカウンターがある対戦相手のPokã©Monに1つのダメージカウンターを置くことができます。 Cacturneが特別な状態の影響を受ける場合、この電力は使用できません。",
            fr: "Une fois pendant votre tour (avant votre attaque), si Cacurne est votre poké actif, vous pouvez mettre 1 compteur de dégâts sur 1 des poké de votre adversaire qui a déjà des compteurs de dégâts dessus. Ce pouvoir ne peut pas être utilisé si Cacurne est affecté par une condition spéciale.",
            de: "Sobald Sie während Ihres Zuges (vor Ihrem Angriff), wenn Kakturne Ihr aktiver Poké Mon Mon ist, können Sie 1 Schadensschalter auf einen der Poké Mons Ihres Gegners aufnehmen, der bereits Schadenszähler hat. Diese Leistung kann nicht angewendet werden, wenn Kakturne durch einen besonderen Zustand betroffen ist.",
            es: "Una vez durante su turno (antes de su ataque), si Cacturne es su Poké Mon activo, puede poner 1 contador de daño en 1 de la Poké Mon de su oponente que ya tiene algún contador de daño. Esta potencia no se puede usar si Cacturne se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno (prima dell'attacco), se Cacturne è il tuo poké attivo, puoi mettere 1 contatore di danni su 1 del poké del tuo avversario che ha già contatori di danno su di esso. Questa potenza non può essere utilizzata se Cacturne è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), se o Cacturne for o seu Poké Mon ativo, você poderá colocar 1 contador de danos em 1 do Poké -Mon do seu oponente que já possui algum contador de danos. Esse poder não pode ser usado se o Cacturne for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Fighting"],
          name: {
            en: "Triple Needle",
            ja: "トリプルニードル",
            fr: "Triple aiguille",
            de: "Dreifachnadel",
            es: "Aguja triple",
            it: "Triplo ago",
            pt: "Agulha tripla",
          },
          effect: {
            en: "Choose 3 of your opponent's Pokemon. This attack does 10 damage to each of those Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "対戦相手のポケモンの3つを選択してください。この攻撃は、それらのポケモンのそれぞれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Choisissez 3 du Pokémon de votre adversaire. Cette attaque fait 10 dégâts à chacun de ces Pokémon. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Wählen Sie 3 des Pokémon Ihres Gegners. Dieser Angriff schädigt jedes dieser Pokémon 10. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Elija 3 de los Pokémon de tu oponente. Este ataque hace 10 daños a cada uno de esos Pokémon. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Scegli 3 del Pokemon del tuo avversario. Questo attacco fa 10 danni a ciascuno di quei Pokemon. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Escolha 3 do Pokémon do seu oponente. Este ataque causa 10 danos a cada um desses Pokémon. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
        },
        {
          cost: ["Fighting", "Colorless", "Colorless"],
          name: {
            en: "Light Punch",
            ja: "軽いパンチ",
            fr: "Coup de poing",
            de: "Leichter Schlag",
            es: "Ligero",
            it: "Punch leggero",
            pt: "Punchado leve",
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

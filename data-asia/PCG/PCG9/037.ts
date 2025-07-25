import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
         en: "Flygon ex (Delta Species)",
         ja: "Flygon ex（デルタ種）",
         fr: "Flygon ex (espèce delta)",
         de: "Flygon EX (Delta -Arten)",
         es: "Flygon ex (especie delta)",
         it: "Flygon Ex (Delta Species)",
         pt: "Flygon Ex (espécie Delta)",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [330],
      hp: 150,
      types: ["Psychic"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Sand Damage",
            ja: "砂の損傷",
            fr: "Dommages causés par le sable",
            de: "Sandschaden",
            es: "Daño de arena",
            it: "Danno di sabbia",
            pt: "Dano de areia",
          },
          effect: {
            en: "As long as Flygon ex is your Active PokÃ©mon, put 1 damage counter on each of your opponent's Benched Basic PokÃ©mon between turns. You can't use more than 1 Sand Damage PokÃ©-Body between turns.",
            ja: "Flygon Exがアクティブなポカモンである限り、ターンの間に対戦相手のベンチに入った基本的なポケモンに1つのダメージカウンターを置きます。 1つ以上の砂ダメージを使用することはできません。",
            fr: "Tant que Flygon Ex est votre poké actif, mettez 1 compteur de dégâts sur chacun des poké de base de votre adversaire entre les virages. Vous ne pouvez pas utiliser plus de 1 dommage de sable Pokã © -body entre les virages.",
            de: "Solange Flygon EX Ihr aktiver Poké Mon Mon ist, setzen Sie 1 Schadenschalter auf die Basis -Basispoken Ihres Gegners zwischen den Kurven. Sie können nicht mehr als 1 Sandschaden zwischen den Kurven verwenden.",
            es: "Mientras Flygon Ex sea su Poké Mon activo, coloque 1 contador de daño en cada uno de los banqueros básicos de su oponente entre turnos. No puede usar más de 1 cuerpo de daño de arena entre giros.",
            it: "Finché Flygon Ex è il tuo poké attivo, metti 1 contatore di danni su ciascuno dei poké di base del tuo avversario tra i turni. Non è possibile utilizzare più di 1 danno a sabbia Poké-body tra i turni.",
            pt: "Enquanto o Flygon Ex for o seu Poké de Mon ativo, coloque 1 contador de danos em cada um dos Poké básicos do seu oponente entre turnos. Você não pode usar mais de 1 dano de areia Poké-corpo entre turnos.",
          },
      }],

      attacks: [
        {
          cost: ["Psychic", "Psychic", "Colorless"],
          name: {
            en: "Psychic Pulse",
            ja: "サイキックパルス",
            fr: "Pouls psychique",
            de: "Psychischer Puls",
            es: "Pulso psíquico",
            it: "Pulse psichica",
            pt: "Pulso psíquico",
          },
          effect: {
            en: "Does 10 damage to each of your opponent's Benched Pokemon that has any damage counters on it. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "ダメージがカウンターを伴う相手のベンチ付きポケモンのそれぞれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Fait 10 dégâts à chacun des pokemon bancés de votre adversaire qui a des compteurs de dégâts dessus. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Schädigt 10 das Bankpokémon Ihres Gegners, das Schadenserzähler hat. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Hace 10 daños a cada Pokémon de banca de tu oponente que tiene algún contador de daño. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Fa 10 danni a ciascuno dei Pokemon in panchina del tuo avversario che ha contatori di danni su di esso. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "10 danos a cada um dos Pokémon bancos do seu oponente que tem algum contador de danos. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
          damage: 80,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
          subtype: "unlimited',
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};

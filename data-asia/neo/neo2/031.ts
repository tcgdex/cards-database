import {Card} from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
      set: Set,
      name: {
         en: "Wobbuffet",
         ja: "ウォブバフェット",
         fr: "Wobbuffet",
         de: "Wobbuffet",
         es: "Wobbuffet",
         it: "Wobbuffet",
         pt: "Wobbuffet",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [202],
      hp: 90,
      types: ["Psychic"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Psychic"],
          name: {
            en: "Counter",
            ja: "カウンタ",
            fr: "Comptoir",
            de: "Schalter",
            es: "Encimera",
            it: "Contatore",
            pt: "Contador",
          },
          effect: {
            en: "If an attack damages Wobbuffet during your opponent's next turn (even if Wobbuffet is Knocked Out), flip a coin. If heads, Wobbuffet attacks the Defending Pokemon for an equal amount of damage.",
            ja: "攻撃が対戦相手の次のターン中にウォブバッフェットに損害を与えた場合（ウォブバフェットがノックアウトされたとしても）、コインをひっくり返します。頭の場合、ウォブバッフェはディフェンディングポケモンを攻撃して等量のダメージを与えます。",
            fr: "Si une attaque endommage Wobbuffet lors du prochain tour de votre adversaire (même si Wobbuffet est éliminé), retournez une pièce. Si la tête, Wobbuffet attaque le Pokémon en défense pour une quantité égale de dégâts.",
            de: "Wenn ein Angriff Wobbuffet während der nächsten Runde Ihres Gegners schädigt (auch wenn Wobbuffet ausgeschlagen wird), drehen Sie eine Münze. Wenn Wobbuffet das verteidigende Pokémon für einen gleichen Schaden angreift.",
            es: "Si un ataque daña a Wobbuffet durante el próximo turno de tu oponente (incluso si Wobbuffet es noqueado), voltea una moneda. Si se dirige, Wobbuffet ataca al Pokémon defensor por una cantidad igual de daño.",
            it: "Se un attacco danneggia Wobbuffet durante il prossimo turno dell'avversario (anche se Wobbuffet viene eliminato), capovolgi una moneta. Se le teste, Wobbuffet attacca il Pokemon in difesa per una quantità uguale di danno.",
            pt: "Se um ataque danificar Wobbuffet durante o próximo turno do seu oponente (mesmo que Wobbuffet seja nocauteado), vire uma moeda. Se as cabeças, Wobbuffete ataca o Pokémon atual por uma quantidade igual de dano.",
          },
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "holo",
        },
      ],
};

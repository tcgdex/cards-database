import {Card} from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Rocket's Hitmonchan",
         ja: "ロケットのヒットモンチャン",
         fr: "Hitmonchan de Rocket",
         de: "Rocket's Hitmonchan",
         es: "Hitmonchan de cohete",
         it: "Hitmonchan di Rocket",
         pt: "Rocket's Hitmonchan",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [107],
      hp: 60,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Fighting"],
          name: {
            en: "Crosscounter",
            ja: "クロスカウンター",
            fr: "Crosscounter",
            de: "Crosscounter",
            es: "Crossco",
            it: "CrossCounter",
            pt: "Cross -counter",
          },
          effect: {
            en: "If an attack does damage to Rocket's Hitmonchan during your opponent's next turn (even if Rocket's Hitmonchan is Knocked Out), flip a coin. If heads, Rocket's Hitmonchan attacks your opponent's Active Pokemon for double that amount of damage. (If Rocket's Hitmonchan takes 20 damage, it does 40 damage to that Pokemon.)",
            ja: "攻撃が相手の次のターン中にロケットのヒットモンチャンにダメージを与えた場合（ロケットのヒットモンチャンがノックアウトされたとしても）、コインをひっくり返します。ヘッドの場合、ロケットのヒットモンチャンは、相手のアクティブなポケモンを攻撃し、その量のダメージを2倍にします。 （RocketのHitmonchanが20ダメージを与えた場合、そのポケモンに40ダメージを与えます。）",
            fr: "Si une attaque endommage à Hitmonchan de Rocket lors du prochain tour de votre adversaire (même si Hitmonchan de Rocket est éliminé), tournez une pièce. Si la tête, Hitmonchan de Rocket attaque le pokemon actif de votre adversaire pour le double de ce nombre de dégâts. (Si Hitmonchan de Rocket subit 20 dégâts, il fait 40 dégâts à ce Pokémon.)",
            de: "Wenn ein Angriff in der nächsten Runde Ihres Gegners Schaden an Rocket's Hitmonchan schädigt (auch wenn Rocket's Hitmonchan ausgeschaltet ist), drehen Sie eine Münze aus. Wenn Hitmonchan von Rocket das aktive Pokémon Ihres Gegners für doppelt so viel Schaden angreift. (Wenn Rockets Hitmonchan 20 Schaden anregt, schädigt das Pokémon 40 Schäden.)",
            es: "Si un ataque da daño al hitmonchan de Rocket durante el próximo turno de tu oponente (incluso si el hitmonchan de Rocket es noqueado), voltea una moneda. Si se dirige, Hitmonchan de Rocket ataca al Pokémon activo de tu oponente por el doble de esa cantidad de daño. (Si Hitmonchan de Rocket recibe 20 daños, hace 40 daños a ese Pokémon).",
            it: "Se un attacco fa danni al Hitmonchan di Rocket durante il prossimo turno del tuo avversario (anche se Hitmonchan di Rocket viene eliminato), capovolgi una moneta. Se la testa, Hitmonchan di Rocket attacca il Pokemon attivo del tuo avversario per il doppio di quella quantità di danno. (Se Hitmonchan di Rocket subisce 20 danni, fa 40 danni a quel Pokemon.)",
            pt: "Se um ataque causar danos ao Hitmonchan do Rocket durante o próximo turno do seu oponente (mesmo que o Hitmachan do Rocket seja nocauteado), vire uma moeda. Se as cabeças, o Hitmonchan do Rocket ataca o Pokémon ativo do seu oponente pelo dobro dessa quantidade de dano. (Se Hitmonchan do Rocket sofre 20 danos, causa 40 danos a esse Pokémon.)",
          },
        },
        {
          cost: ["Fighting", "Fighting", "Colorless"],
          name: {
            en: "Magnum Punch",
            ja: "マグナムパンチ",
            fr: "Punch de magnum",
            de: "Magnum Punch",
            es: "Magnum Punch",
            it: "Magnum Punch",
            pt: "Magnum Punch",
          },
          damage: 50,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
        },
      ],
};

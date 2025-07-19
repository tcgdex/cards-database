import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
      set: Set,
      name: {
         en: "Medicham",
         ja: "メディチャム",
         fr: "Médicham",
         de: "Medicham",
         es: "Medicham",
         it: "Medicham",
         pt: "Medicham",
      },

      rarity: "Unknown",
      category: "Pokemon",
      dexId: [308],
      hp: 80,
      types: ["Fighting"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Vigorous Aura",
            ja: "活発なオーラ",
            fr: "Aura vigoureuse",
            de: "Kräftige Aura",
            es: "Aura vigorosa",
            it: "Aura vigorosa",
            pt: "Aura vigorosa",
          },
          effect: {
            en: "As long as Medicham is your Active PokÃ©mon, attacks by each player's Active PokÃ©mon do 10 more damage to any Active PokÃ©mon (before applying Weakness and Resistance).",
            ja: "MedichamがあなたのアクティブなPokã©Monである限り、各プレイヤーのアクティブなPokã©Monによる攻撃は、アクティブなPokã©Monにさらに10ダメージを与えます（脱力感と抵抗を適用する前）。",
            fr: "Tant que Medicham est votre poké actif, les attaques par Poké actif de chaque joueur font 10 dommages supplémentaires à tout poké actif (avant d'appliquer une faiblesse et une résistance).",
            de: "Solange Medicham Ihr aktives Poké Mon Mon ist, haben die Angriffe der aktiven Poké -Mone jedes Spielers 10 weitere Schäden an aktiven Poké Mon (bevor Sie Schwäche und Widerstand anwenden).",
            es: "Mientras Medicham sea su Poké Mon activo, los ataques del Poké activo de cada jugador dan 10 daños más a cualquier Poké Mon activo (antes de aplicar debilidad y resistencia).",
            it: "Finché Medicham è il tuo poké attivo, gli attacchi del poké attivo di ciascun giocatore fanno 10 danni in più a qualsiasi poké attivo (prima di applicare debolezza e resistenza).",
            pt: "Enquanto o Medicham for o seu Poké Mon ativo, ataca pelo Poké de cada jogador de cada 10 danos a qualquer Poké Mon ativo (antes de aplicar fraqueza e resistência).",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Punch",
            ja: "パンチ",
            fr: "Punch",
            de: "Stempel",
            es: "Puñetazo",
            it: "Punch",
            pt: "Soco",
          },
          damage: 30,
        },
        {
          cost: ["Fighting", "Fighting", "Colorless"],
          name: {
            en: "Rolling Kick",
            ja: "ローリングキック",
            fr: "Coup de pied de roulement",
            de: "Rolling Kick",
            es: "Patada rodante",
            it: "Calcio rotolante",
            pt: "Rolling Kick",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Paralyzed.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant paralysé.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokémon jetzt gelähmt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está paralizado.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora paralizzato.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon defensor agora está paralisado.",
          },
          damage: 40,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};

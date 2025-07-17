import {Card} from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
      set: Set,
      name: {
         en: "Parasect",
         ja: "パラセクト",
         fr: "Parasect",
         de: "Parasitekt",
         es: "Parasecto",
         it: "Paraseto",
         pt: "Parasecto",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [47],
      hp: 60,
      types: ["Grass"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Allergic Pollen",
            ja: "アレルギー性花粉",
            fr: "Pollen allergique",
            de: "Allergischer Pollen",
            es: "Polen alérgico",
            it: "Polline allergico",
            pt: "Pólen alérgico",
          },
          effect: {
            en: "As long as Parasect is in play, cards in any player's discard piles are not affected by attacks or Pokémon Powers. This power stops working if Parasect becomes Asleep, Confused, or Paralyzed.",
            ja: "ParaSectがプレイしている限り、プレイヤーの破棄パイルのカードは、攻撃やポケモンパワーの影響を受けません。 ParaSectが眠り、混乱し、麻痺した場合、このパワーは機能しなくなります。",
            fr: "Tant que le parasect est en jeu, les cartes dans les tas de défausse de tout joueur ne sont pas affectées par des attaques ou des pouvoirs de Pokémon. Ce pouvoir cesse de fonctionner si le parasect s'endormit, confus ou paralysé.",
            de: "Solange Parasitekt im Spiel ist, werden Karten in den Ablagerungen eines Spielers nicht von Angriffen oder Pokémon -Kräften betroffen. Diese Kraft hört auf zu funktionieren, wenn das Parasinkt einschläft, verwirrt oder gelähmt ist.",
            es: "Mientras Parasect esté en juego, las cartas en las pilas de descarga de cualquier jugador no se ven afectadas por ataques o poderes de Pokémon. Este poder deja de funcionar si Parasect se duerme, confunde o se paraliza.",
            it: "Finché i paraseti sono in gioco, le carte nelle pile di scarto di qualsiasi giocatore non sono influenzate da attacchi o poteri di Pokémon. Questo potere smette di funzionare se il paraseto si addormenta, confuso o paralizzato.",
            pt: "Enquanto o Parasect estiver em jogo, as cartas nas pilhas de descarte de qualquer jogador não são afetadas por ataques ou poderes de Pokémon. Esse poder para de funcionar se o Parasect ficar dormindo, confuso ou paralisado.",
          },
      }],

      attacks: [
        {
          cost: ["Grass", "Grass"],
          name: {
            en: "Sleep Pinchers",
            ja: "睡眠ピンチャー",
            fr: "Pincements de sommeil",
            de: "Schlafklemmungen",
            es: "Pinchers de sueño",
            it: "Sleep Pinchers",
            pt: "Sleep Binchers",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Asleep.",
            ja: "コインをひっくり返します。頭の場合、防御するポケモンは今眠っています。",
            fr: "Retourner une pièce. Si la tête, le Pokémon en défense est maintenant endormi.",
            de: "Eine Münze drehen. Wenn Köpfe, schläft das verteidigende Pokemon jetzt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está dormido.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora addormentato.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon defensor agora está dormindo.",
          },
          damage: 30,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};

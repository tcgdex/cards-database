import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Light Piloswine",
         ja: "軽いピロスワイン",
         fr: "Piloswine légère",
         de: "Leichte Piloswine",
         es: "Piloswine ligero",
         it: "Piloswine leggero",
         pt: "Piloswine leve",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [221],
      hp: 90,
      types: ["Water"],
      stage: "Stage1",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Fluffy Wool",
            ja: "ふわふわしたウール",
            fr: "Laine moelleuse",
            de: "Flauschige Wolle",
            es: "Lana esponjosa",
            it: "Lana soffice",
            pt: "Lã macia",
          },
          effect: {
            en: "During your opponent's turn, if Light Piloswine is your Active Pokmon and is damaged by your opponent's attack (even if it's Knocked Out), flip a coin. If heads, the attacking Pokmon is now Asleep. This power stops working if Light Piloswine is already Asleep, Confused, or Paralyzed when your opponent attacks.",
            ja: "相手のターン中、ライトピロスワインがアクティブなポクモンであり、相手の攻撃によって損傷を受けている場合（たとえノックアウトされていても）、コインをひっくり返します。頭の場合、攻撃するポクモンは今眠っています。ライトピロスワインがすでに眠っている、混乱している、または相手が攻撃したときに麻痺している場合、このパワーは機能しなくなります。",
            fr: "Pendant le tour de votre adversaire, si Light Piloswine est votre Pokmon actif et est endommagé par l'attaque de votre adversaire (même si elle est éliminée), retournez une pièce. Si la tête, le Pokmon attaquant est maintenant endormi. Ce pouvoir cesse de fonctionner si Light Piloswine est déjà endormi, confus ou paralysé lorsque votre adversaire attaque.",
            de: "Während der Kurve Ihres Gegners, wenn leichter Piloswine Ihr aktives Pokmon ist und durch den Angriff Ihres Gegners beschädigt wird (auch wenn er ausgeschaltet ist), drehen Sie eine Münze um. Wenn Sie Köpfe haben, schläft das angreifende Pokmon jetzt. Diese Kraft hört auf zu arbeiten, wenn leichter Piloswine bereits schläft, verwirrt oder gelähmt ist, wenn Ihr Gegner angreift.",
            es: "Durante el turno de tu oponente, si la luz PILOSWINE es tu Pokmon activo y está dañado por el ataque de tu oponente (incluso si está golpeado), voltea una moneda. Si se dirige, el Pokmon atacante ahora está dormido. Este poder deja de funcionar si Light Piloswine ya está dormido, confundido o paralizado cuando tu oponente ataca.",
            it: "Durante il turno del tuo avversario, se Light Piloswine è il tuo Pokmon attivo ed è danneggiato dall'attacco del tuo avversario (anche se viene eliminato), capovolgi una moneta. Se la testa, il Pokmon attaccante ora dorme. Questo potere smette di funzionare se la luce piloswine è già addormentata, confusa o paralizzata quando il tuo avversario attacca.",
            pt: "Durante a vez do seu oponente, se o Piloswine leve for o seu Pokmon ativo e for danificado pelo ataque do seu oponente (mesmo que seja nocauteado), vire uma moeda. Se as cabeças, o Pokmon atacante agora está dormindo. Esse poder para de funcionar se o piloswine leve já estiver dormindo, confuso ou paralisado quando seu oponente ataca.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Knock Over",
            ja: "ノックオーバー",
            fr: "Renverser",
            de: "Umwerfen",
            es: "Derribar",
            it: "Knocking Over",
            pt: "Bate",
          },
          effect: {
            en: "If there is a Stadium card in play, you may discard it.",
            ja: "プレイ中にスタジアムカードがある場合は、捨てることができます。",
            fr: "S'il y a une carte de stade en jeu, vous pouvez le jeter.",
            de: "Wenn es eine Stadionkarte im Spiel gibt, können Sie sie wegwerfen.",
            es: "Si hay una carta del estadio en juego, puede descartarla.",
            it: "Se c'è una carta dello stadio in gioco, puoi scartarla.",
            pt: "Se houver uma carta de estádio em jogo, você poderá descartá -la.",
          },
          damage: 30,
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "normal",
        },
      ],
};

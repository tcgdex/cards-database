import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Light Wigglytuff",
         ja: "軽いウィグリティフ",
         fr: "Léger wigglytuff",
         de: "Licht wacklytuff",
         es: "Ligero wigglytuff",
         it: "Wigglytuff leggero",
         pt: "Leve Wigglytuff",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [40],
      hp: 80,
      types: ["Colorless"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Evolution Song",
            ja: "進化の歌",
            fr: "Song d'évolution",
            de: "Evolutionslied",
            es: "Canción de evolución",
            it: "Canzone di evoluzione",
            pt: "Música de evolução",
          },
          effect: {
            en: "Your opponent may choose 1 of his or her Pokemon and search his or her deck for a card that evolves from that Pokemon. Your opponent attaches that card to that Pokemon. This counts as evolving that Pokemon. Either way, you may do the same, and then each player who searched shuffles his or her deck.",
            ja: "対戦相手は、ポケモンの1つを選択し、そのポケモンから進化するカードを自分のデッキに検索することができます。相手はそのカードをそのポケモンに取り付けます。これは、そのポケモンの進化としてカウントされます。いずれにせよ、あなたは同じことをするかもしれません、そして、検索した各プレイヤーは彼または彼女のデッキをシャッフルします。",
            fr: "Votre adversaire peut choisir un de son Pokémon et chercher son deck pour une carte qui évolue à partir de ce Pokémon. Votre adversaire attache cette carte à ce Pokémon. Cela compte comme évoluant ce Pokémon. Quoi qu'il en soit, vous pouvez faire de même, puis chaque joueur qui a cherché à mélange son deck.",
            de: "Ihr Gegner kann 1 seiner Pokemon wählen und sein Deck nach einer Karte durchsuchen, die sich von diesem Pokémon entwickelt. Ihr Gegner hält diese Karte an diesem Pokémon an. Dies gilt als sich dieses Pokemon weiterentwickeln. In jedem Fall können Sie dasselbe tun, und dann kann jeder Spieler, der gesucht hat, sein Deck mischt.",
            es: "Tu oponente puede elegir 1 de su Pokémon y buscar en su mazo una carta que evoluciona de ese Pokémon. Tu oponente adjunta esa carta a ese Pokémon. Esto cuenta como evolucionando a ese Pokémon. De cualquier manera, puedes hacer lo mismo, y luego cada jugador que buscó barajas su mazo.",
            it: "Il tuo avversario può scegliere 1 dei suoi Pokemon e cercare nel suo mazzo una carta che si evolve da quel Pokemon. Il tuo avversario collega quella scheda a quel Pokemon. Questo conta come in evoluzione di quel Pokemon. Ad ogni modo, puoi fare lo stesso, e quindi ogni giocatore che ha cercato mescola il suo mazzo.",
            pt: "Seu oponente pode escolher 1 de seu Pokémon e procurar um baralho para um cartão que evolui daquele Pokémon. Seu oponente anexa esse cartão a esse Pokémon. Isso conta como evoluindo esse Pokémon. De qualquer maneira, você pode fazer o mesmo e, em seguida, cada jogador que revistou o baralho.",
          },
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Body Slam",
            ja: "ボディスラム",
            fr: "Claquement de corps",
            de: "Body Slam",
            es: "Cañón de cuerpo",
            it: "Body Slam",
            pt: "Body Slam",
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
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};

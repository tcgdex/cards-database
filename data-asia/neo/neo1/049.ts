import {Card} from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
      set: Set,
      name: {
         en: "Slowking",
         ja: "スローキング",
         fr: "Ralentissement",
         de: "Langsamer",
         es: "Lento",
         it: "Rallentamento",
         pt: "Desacelerar",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [199],
      hp: 80,
      types: ["Psychic"],
      stage: "Stage1",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Mind Games",
            ja: "マインドゲーム",
            fr: "Jeux d'esprit",
            de: "Mind Games",
            es: "Juegos mentales",
            it: "Giochi mentali",
            pt: "Jogos mentais",
          },
          effect: {
            en: "<em>You may use this Power if Slowking is your Active Pokmon</em>. Whenever your opponent plays a Trainer card, you may flip a coin. If heads, that card does nothing. Put it on top of your opponent's deck. This power can't be used if Slowking is Asleep, Confused, or Paralyzed.",
            ja: "<em>スローキングがアクティブなポクモン</em>である場合、このパワーを使用できます。対戦相手がトレーナーカードをプレイするたびに、コインをひっくり返すことができます。頭の場合、そのカードは何もしません。対戦相手のデッキの上に置いてください。スローキングが眠ったり、混乱したり、麻痺している場合、このパワーは使用できません。",
            fr: "<em> Vous pouvez utiliser cette puissance si le ralentissement est votre pokmon actif </em>. Chaque fois que votre adversaire joue une carte d'entraîneur, vous pouvez retourner une pièce. Si les têtes, cette carte ne fait rien. Mettez-le sur le pont de votre adversaire. Ce pouvoir ne peut pas être utilisé si le ralentissement est endormi, confus ou paralysé.",
            de: "<em> Sie können diese Leistung anwenden, wenn Slowking Ihr aktiver Pokmon </em> ist. Immer wenn Ihr Gegner eine Trainerkarte spielt, können Sie eine Münze umdrehen. Wenn Köpfe, tut diese Karte nichts. Legen Sie es auf das Deck Ihres Gegners. Diese Kraft kann nicht verwendet werden, wenn langsamer, verwirrt oder gelähmt ist.",
            es: "<em> Puede usar esta potencia si Slowking es su Pokmon activo </em>. Cada vez que tu oponente juega una carta de entrenador, puedes voltear una moneda. Si se dirige, esa tarjeta no hace nada. Ponlo encima de la cubierta de tu oponente. Este poder no se puede usar si la lenta es dormida, confundida o paralizada.",
            it: "<em> Puoi usare questa potenza se il rallentamento è il tuo Pokmon attivo </em>. Ogni volta che il tuo avversario gioca una carta dell'allenatore, puoi capovolgere una moneta. Se la testa, quella carta non fa nulla. Mettilo sopra il mazzo del tuo avversario. Questa potenza non può essere usata se il rallentamento è addormentato, confuso o paralizzato.",
            pt: "<em> Você pode usar esse poder se o Slowking for o seu Pokmon ativo </em>. Sempre que seu oponente toca um cartão de treinador, você pode virar uma moeda. Se as cabeças, esse cartão não faz nada. Coloque -o em cima do baralho do seu oponente. Esse poder não pode ser usado se a desaceleração estiver dormindo, confusa ou paralisada.",
          },
      }],

      attacks: [
        {
          cost: ["Psychic", "Psychic", "Psychic"],
          name: {
            en: "Mind Blast",
            ja: "マインドブラスト",
            fr: "Explosion de l'esprit",
            de: "Gedankenexplosion",
            es: "Explosión mental",
            it: "Mind Blast",
            pt: "Explosão da mente",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 20 damage plus 10 more damage and the Defending Pokemon is now Confused. If tails, this attack does 20 damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は20ダメージに加えて10ダメージを与え、防御ポケモンが混乱しています。尾の場合、この攻撃は20ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 20 dégâts plus 10 dégâts supplémentaires et le Pokémon en défense est maintenant confus. Si Tails, cette attaque fait 20 dégâts.",
            de: "Eine Münze drehen. Wenn Köpfe, verursacht dieser Angriff 20 Schäden plus 10 weitere Schäden und das verteidigende Pokémon ist jetzt verwirrt. Wenn Schwänze, verursacht dieser Angriff 20 Schaden.",
            es: "Voltea una moneda. Si las cabezas, este ataque hace 20 daños más 10 más de daño y el Pokémon defensor ahora está confundido. Si Tails, este ataque hace 20 daños.",
            it: "Capovolgi una moneta. Se le teste, questo attacco infligge 20 danni più 10 danni in più e il Pokemon in difesa è ora confuso. Se le code, questo attacco infligge 20 danni.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 20 danos mais 10 mais danos e o Pokémon atual está agora confuso. Se as caudas, esse ataque causam 20 danos.",
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

import {Card} from "../../../interfaces"
import Set from "../E5"

const card: Card = {
      set: Set,
      name: {
         en: "Arcanine - 017/088",
         ja: "アルカニン-017/088",
         fr: "Arcanine - 017/088",
         de: "Arcanine - 017/088",
         es: "Arcanine - 017/088",
         it: "Arcanina - 017/088",
         pt: "Arcanine - 017/088",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [59],
      hp: 80,
      types: ["Fire"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Energy Recharge",
            ja: "エネルギー充電",
            fr: "Recharge d'énergie",
            de: "Energieaufladung",
            es: "Recarga de energía",
            it: "Ricarica di energia",
            pt: "Recarga de energia",
          },
          effect: {
            en: "When you play Arcanine from your hand to evolve your Active Pokmon, you may flip 3 coins. For each heads, choose a basic Energy card from your discard pile and attach it to Arcanine.",
            ja: "アクティブなポケモンを進化させるために手からアルカニンを演奏すると、3コインをひっくり返すことができます。ヘッドごとに、廃棄パイルから基本的なエネルギーカードを選択し、アルカニンに取り付けます。",
            fr: "Lorsque vous jouez à l'arcanine de votre main pour faire évoluer votre Pokémon actif, vous pouvez retourner 3 pièces. Pour chaque tête, choisissez une carte d'énergie de base dans votre tas de défausse et fixez-la à l'arcanine.",
            de: "Wenn Sie Arcanin von Ihrer Hand spielen, um Ihr aktives Pokémon zu entwickeln, können Sie 3 Münzen umdrehen. Wählen Sie für jeden Köpfe eine grundlegende Energiekarte von Ihrem Ablagerungsstapel aus und befestigen Sie sie an Arcanin.",
            es: "Cuando juegas arcanine desde tu mano para evolucionar tu Pokémon activo, puedes voltear 3 monedas. Para cada cabezal, elija una tarjeta de energía básica de su pila de descarte y colóquela a la arcanina.",
            it: "Quando giochi ad Arcanine dalla tua mano per evolvere il tuo Pokemon attivo, puoi capovolgere 3 monete. Per ogni teste, scegli una scheda energetica di base dalla pila di scarto e attaccalo all'Arcanina.",
            pt: "Quando você toca Arcanine da sua mão para evoluir seu Pokémon ativo, você pode virar 3 moedas. Para cada cabeça, escolha um cartão de energia básico na sua pilha de descarte e prenda -a ao Arcanine.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Shake",
            ja: "振る",
            fr: "Secouer",
            de: "Shake",
            es: "Agitar",
            it: "Scuotere",
            pt: "Sacudir",
          },
          effect: {
            en: "Your opponent switches the Defending Pokemon with 1 of his or her Benched Pokemon, if any.",
            ja: "対戦相手は、ベンチ付きポケモンの1つで防御ポケモンを切り替えます。",
            fr: "Votre adversaire change le Pokémon en défense avec un de son Pokémon banc, le cas échéant.",
            de: "Ihr Gegner wechselt das verteidigende Pokémon mit einem seiner oder ihres Bankpokemon, falls vorhanden.",
            es: "Tu oponente cambia al Pokémon defensor con 1 de su Pokémon de banca, si es que hay alguno.",
            it: "Il tuo avversario cambia il Pokemon in difesa con 1 del suo Pokemon in panchina, se presente.",
            pt: "Seu oponente troca o Pokémon atual com 1 de seu Pokémon em banco, se houver.",
          },
          damage: 10,
        },
        {
          cost: ["Fire", "Fire", "Colorless"],
          name: {
            en: "White Flames",
            ja: "白い炎",
            fr: "Flammes blanches",
            de: "Weiße Flammen",
            es: "Llamas blancas",
            it: "Fiamme bianche",
            pt: "Chamas brancas",
          },
          effect: {
            en: "Discard all Fire Energy cards attached to Arcanine.",
            ja: "アルカニンに取り付けられたすべての消防エネルギーカードを廃棄します。",
            fr: "Jetez toutes les cartes d'énergie de feu attachées à l'arcanine.",
            de: "Entsorgen Sie alle an Arcanin befestigten Feuerergiekarten.",
            es: "Deseche todas las tarjetas de energía de fuego unidas a la arcanina.",
            it: "Scartare tutte le carte di energia del fuoco collegate all'arcanina.",
            pt: "Descarte todos os cartões de energia de incêndio ligados à arcanina.",
          },
          damage: 70,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};

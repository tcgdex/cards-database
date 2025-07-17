import {Card} from "../../../interfaces"
import Set from "../E5"

const card: Card = {
      set: Set,
      name: {
         en: "Gengar - 044/088",
         ja: "Gengar -044/088",
         fr: "Gengar - 044/088",
         de: "Gengar - 044/088",
         es: "Gengar - 044/088",
         it: "Gengar - 044/088",
         pt: "Gengar - 044/088",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [94],
      hp: 100,
      types: ["Psychic"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Manipulate",
            ja: "操作",
            fr: "Manipuler",
            de: "Manipulieren",
            es: "Manipular",
            it: "Manipolare",
            pt: "Manipular",
          },
          effect: {
            en: "When you play Gengar from your hand to evolve your Active Pokmon, you may put a Basic Pokmon (excluding Baby Pokmon) from your discard pile onto your Bench. Then, flip 3 coins. For each heads, choose a basic Energy card from your discard pile and attach it to that Pokmon.",
            ja: "アクティブなポクモンを進化させるために手からジェンガーを演奏すると、廃棄の山からベンチに基本的なポクモン（ベビーポクモンを除く）を入れることができます。次に、3コインをひっくり返します。ヘッドごとに、廃棄パイルから基本的なエネルギーカードを選択し、そのポクモンに取り付けます。",
            fr: "Lorsque vous jouez à Gengar de votre main pour faire évoluer votre Pokmon actif, vous pouvez mettre un Pokmon de base (à l'exclusion du bébé Pokmon) de votre tas de défausse sur votre banc. Ensuite, tournez 3 pièces. Pour chaque tête, choisissez une carte d'énergie de base dans votre tas de défausse et fixez-la à ce pokmon.",
            de: "Wenn Sie Gengar von Ihrer Hand spielen, um Ihr aktives Pokmon zu entwickeln, können Sie ein Basic -Pokmon (mit Ausnahme von Baby -Pokmon) von Ihrem Entsagungsstapel auf Ihre Bank legen. Dann 3 Münzen umdrehen. Wählen Sie für jeden Köpfe eine grundlegende Energiekarte von Ihrem Ablagerungsstapel aus und befestigen Sie sie an diesem Pokmon.",
            es: "Cuando juegas a Gengar de tu mano para evolucionar tu Pokmon activo, puedes poner un Pokmon básico (excluyendo Baby Pokmon) de tu pila de descarte en tu banco. Luego, voltee 3 monedas. Para cada cabezal, elija una tarjeta de energía básica de su pila de descarte y colóquela a ese Pokmon.",
            it: "Quando giochi a Gengar dalla tua mano per evolvere il tuo Pokmon attivo, puoi mettere un Pokmon di base (escluso il bambino Pokmon) dal tuo mucchio di scarti sulla panchina. Quindi, capovolgi 3 monete. Per ogni testa, scegli una scheda di energia di base dalla pila di scarto e attaccalo a quel Pokmon.",
            pt: "Quando você joga Gengar da sua mão para evoluir seu Pokmon ativo, você pode colocar um Pokmon básico (excluindo o bebê Pokmon) da sua pilha de descarte no seu banco. Em seguida, vire 3 moedas. Para cada cabeça, escolha um cartão de energia básico da sua pilha de descarte e anexe -a a esse Pokmon.",
          },
      }],

      attacks: [
        {
          cost: ["Psychic", "Psychic", "Colorless", "Colorless"],
          name: {
            en: "Hydrokinesis",
            ja: "Hydrokinesis",
            fr: "Hydrokinésie",
            de: "Hydrokinese",
            es: "Hidroquinesis",
            it: "Idrokinesi",
            pt: "Hidrokinesis",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Burned. If tails, the Defending Pokemon is now Confused.",
            ja: "コインをひっくり返します。頭の場合、防御するポケモンが燃やされます。尾の場合、防御ポケモンは混乱しています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant brûlé. Si Tails, le Pokémon en défense est maintenant confus.",
            de: "Eine Münze drehen. Wenn Köpfe, wird das verteidigende Pokemon jetzt verbrannt. Wenn Schwänze, ist das verteidigende Pokemon jetzt verwirrt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora se quema. Si Tails, el Pokémon defensor ahora está confundido.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in difesa viene ora bruciato. Se le code, il Pokemon in carica è ora confuso.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon defensor agora está queimado. Se o cauda, o pokemon atual agora está confuso.",
          },
          damage: 40,
        },
      ],

      retreat: 2,

};

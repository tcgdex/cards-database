import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Giovanni's Persian",
         ja: "ジョバンニのペルシャ語",
         fr: "Le persan de Giovanni",
         de: "Giovannis Perser",
         es: "Persa de Giovanni",
         it: "Il persiano di Giovanni",
         pt: "O persa de Giovanni",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [53],
      hp: 60,
      types: ["Colorless"],
      stage: "Stage1",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Call the Boss",
            ja: "上司に電話してください",
            fr: "Appeler le patron",
            de: "Rufen Sie den Chef an",
            es: "Llamar al jefe",
            it: "Chiama il capo",
            pt: "Ligue para o chefe",
          },
          effect: {
            en: "When you play Giovanni's Persian from your hand, you may search your deck for the Trainer card named 18, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
            ja: "Giovanniのペルシャ語を手からプレイしたら、18という名前のトレーナーカードを検索し、相手に見せて、手に渡すことができます。その後、デッキをシャッフルします。",
            fr: "Lorsque vous jouez du persan de Giovanni de votre main, vous pouvez rechercher votre jeu la carte d'entraînement nommée 18, le montrer à votre adversaire et le mettre dans votre main. Mélanger votre deck par la suite.",
            de: "Wenn Sie Giovannis Perser von Ihrer Hand spielen, können Sie Ihr Deck nach der Trainerkarte mit dem Namen 18 durchsuchen, es Ihrem Gegner zeigen und in Ihre Hand legen. Mischen Sie anschließend Ihr Deck.",
            es: "Cuando juegas el persa de Giovanni de tu mano, puedes buscar en tu mazo la carta del entrenador llamada 18, mostrarlo a tu oponente y ponerlo en tu mano. Baraja tu mazo después.",
            it: "Quando suoni la persiana di Giovanni dalla tua mano, puoi cercare nel tuo mazzo la carta di allenamento chiamato 18, mostrarlo al tuo avversario e metterlo in mano. Shuffle il tuo mazzo in seguito.",
            pt: "Quando você toca persa de Giovanni da sua mão, você pode pesquisar no seu baralho a carta de treinador chamada 18, mostrá -la ao seu oponente e colocá -la em sua mão. Afaste seu baralho depois.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Ambush",
            ja: "待ち伏せ",
            fr: "Embuscade",
            de: "Hinterhalt",
            es: "Emboscada",
            it: "Agguato",
            pt: "Emboscada",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 20 damage plus 20 more damage; if tails, this attack does 20 damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は20ダメージに加えて20ダメージを与えます。尾の場合、この攻撃は20ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 20 dégâts plus 20 dégâts supplémentaires; Si Tails, cette attaque fait 20 dégâts.",
            de: "Eine Münze drehen. Wenn Köpfe, verursacht dieser Angriff 20 Schäden plus 20 weitere Schäden; Wenn Schwänze, verursacht dieser Angriff 20 Schaden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 20 daños más 20 más de daño; Si Tails, este ataque hace 20 daños.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 20 danni più 20 danni in più; Se le code, questo attacco infligge 20 danni.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 20 danos mais 20 mais danos; Se as caudas, esse ataque causam 20 danos.",
          },
        },
      ],


      variants: [
        {
          type: "holo",
        },
      ],
};

import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Sealeo",
         ja: "シーレオ",
         fr: "Sealeo",
         de: "Sealeo",
         es: "Marina",
         it: "Sealeo",
         pt: "Sealeo",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [364],
      hp: 70,
      types: ["Water"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Power Circulation",
            ja: "パワー循環",
            fr: "Circulation de puissance",
            de: "Leistungszirkulation",
            es: "Circulación de potencia",
            it: "Circolazione di potenza",
            pt: "Circulação de potência",
          },
          effect: {
            en: "Once during your turn (before your attack), you may search your discard pile for a basic Energy card, show it to your opponent, and put it on top of your deck. If you do, put 1 damage counter on Sealeo. This power can't be used if Sealeo is affected by a Special Condition.",
            ja: "ターン中（攻撃の前）になったら、廃棄パイルを基本的なエネルギーカードで検索し、相手に見せて、デッキの上に置くことができます。もしそうなら、Sealeoに1つのダメージカウンターを入れます。シーレオが特別な状態の影響を受けている場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez rechercher à votre débarquement une carte d'énergie de base, le montrer à votre adversaire et le mettre sur votre jeu. Si vous le faites, mettez 1 compteur de dégâts sur Sealeo. Cette puissance ne peut pas être utilisée si Sealeo est affecté par une condition spéciale.",
            de: "Sobald Sie während Ihres Zuges (vor Ihrem Angriff) sind, können Sie Ihren Abwurfstapel nach einer grundlegenden Energiekarte durchsuchen, es Ihrem Gegner zeigen und auf Ihr Deck legen. Wenn Sie dies tun, legen Sie Sealeo 1 Schadenschalter. Diese Kraft kann nicht verwendet werden, wenn Sealeo von einem besonderen Zustand betroffen ist.",
            es: "Una vez durante su turno (antes de su ataque), puede buscar en su pila de descarte una carta de energía básica, mostrarla a su oponente y ponerlo encima de su mazo. Si lo hace, ponga 1 mostrador de daño en SeaLeo. Este poder no se puede usar si SeaLeo se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno (prima del tuo attacco), puoi cercare nella pila di scarto per una carta di energia di base, mostrarlo al tuo avversario e metterlo sopra il mazzo. Se lo fai, metti 1 contatore di danni su Sealeo. Questo potere non può essere utilizzato se Sealeo è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), você pode procurar uma pilha de descarte por um cartão de energia básico, mostrar -o ao seu oponente e colocá -lo em cima do seu baralho. Se o fizer, coloque 1 contador de danos em Sealeo. Esse poder não pode ser usado se o Sealeo for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Water", "Colorless"],
          name: {
            en: "Lunge Out",
            ja: "突進します",
            fr: "Se précipiter",
            de: "Ausholen",
            es: "Atropellarse",
            it: "Affondare",
            pt: "Localizar",
          },
          damage: 30,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};

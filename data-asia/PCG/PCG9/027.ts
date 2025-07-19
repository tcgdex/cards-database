import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
         en: "Mantine (Delta Species)",
         ja: "マンティン（デルタ種）",
         fr: "Mantentine (espèces delta)",
         de: "Mantine (Delta -Arten)",
         es: "Mantina (especie delta)",
         it: "Mantine (Delta Species)",
         pt: "Mantino (espécie Delta)",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [226],
      hp: 50,
      types: ["Lightning"],
      stage: "Basic",

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
            en: "Once during your turn (before your attack), you may search your discard pile for a basic Energy card, show it to your opponent, and put it on top of your deck. If you do, put 1 damage counter on Mantine. This power can't be used if Mantine is affected by a Special Condition.",
            ja: "ターン中（攻撃の前）になったら、廃棄パイルを基本的なエネルギーカードで検索し、相手に見せて、デッキの上に置くことができます。もしそうなら、マンティンに1つのダメージカウンターを入れます。マンチンが特別な状態の影響を受けている場合、この力は使用できません。",
            fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez rechercher à votre débarquement une carte d'énergie de base, le montrer à votre adversaire et le mettre sur votre jeu. Si vous le faites, mettez 1 compteur de dégâts sur Mantine. Cette puissance ne peut pas être utilisée si la mantetine est affectée par une condition spéciale.",
            de: "Sobald Sie während Ihres Zuges (vor Ihrem Angriff) sind, können Sie Ihren Abwurfstapel nach einer grundlegenden Energiekarte durchsuchen, es Ihrem Gegner zeigen und auf Ihr Deck legen. Wenn Sie dies tun, setzen Sie Mantine 1 Schadenschalter. Diese Leistung kann nicht angewendet werden, wenn Mantine durch einen besonderen Zustand beeinflusst wird.",
            es: "Una vez durante su turno (antes de su ataque), puede buscar en su pila de descarte una carta de energía básica, mostrarla a su oponente y ponerlo encima de su mazo. Si lo hace, ponga 1 contador de daño en Mantine. Esta potencia no se puede usar si Mantine se ve afectada por una condición especial.",
            it: "Una volta durante il tuo turno (prima del tuo attacco), puoi cercare nella pila di scarto per una carta di energia di base, mostrarlo al tuo avversario e metterlo sopra il mazzo. Se lo fai, inserisci 1 contatore di danni su Mantine. Questa potenza non può essere utilizzata se Mantine è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), você pode procurar uma pilha de descarte por um cartão de energia básico, mostrar -o ao seu oponente e colocá -lo em cima do seu baralho. Se o fizer, coloque 1 contador de danos no Mantine. Esse poder não pode ser usado se o Mantine for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Lightning"],
          name: {
            en: "Spiral Drain",
            ja: "スパイラルドレイン",
            fr: "Spiritin en spirale",
            de: "Spiralabfluss",
            es: "Desagüe",
            it: "Scarico a spirale",
            pt: "Dreno em espiral",
          },
          effect: {
            en: "Remove 1 damage counter from Mantine.",
            ja: "マンティンから1つのダメージカウンターを取り外します。",
            fr: "Retirez 1 compteur de dégâts de la mantentine.",
            de: "Entfernen Sie 1 Schadenschalter vom Mantine.",
            es: "Retire 1 contador de daño de Mantine.",
            it: "Rimuovere 1 contatore di danni da Mantine.",
            pt: "Remova 1 contador de danos do Mantino.",
          },
          damage: 10,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};

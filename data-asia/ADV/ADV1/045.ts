import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
         en: "Delcatty",
         ja: "delcatty",
         fr: "Delcatty",
         de: "Delcatty",
         es: "Delcatty",
         it: "Delcatty",
         pt: "Delcatty",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [301],
      hp: 70,
      types: ["Colorless"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Energy Draw",
            ja: "エネルギーの引き分け",
            fr: "Tirage d'énergie",
            de: "Energieabnahme",
            es: "Sorteo",
            it: "Disegna di energia",
            pt: "Desenho de energia",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, you may discard 1 Energy card from your hand.  Then draw up to 3 cards from your deck.  This power can't be used if Delcatty is affected by a Special Condition.",
            ja: "順番<em>（攻撃の前）</em>中に、1つのエネルギーカードを手から捨てることができます。  次に、デッキから最大3枚のカードを作成します。  Delcattyが特別な状態の影響を受ける場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </em>, vous pouvez jeter 1 carte d'énergie de votre main.  Ensuite, tirez jusqu'à 3 cartes de votre deck.  Cette puissance ne peut pas être utilisée si Delcatty est affectée par une condition spéciale.",
            de: "Sobald Sie in Ihrem Zug <em> (vor Ihrem Angriff) </em> sind, können Sie 1 Energiekarte von Ihrer Hand wegwerfen.  Zeichnen Sie dann bis zu 3 Karten von Ihrem Deck.  Diese Leistung kann nicht angewendet werden, wenn Delcatty von einem besonderen Zustand betroffen ist.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, puede descartar 1 tarjeta de energía de su mano.  Luego extraiga a 3 cartas desde su mazo.  Esta potencia no se puede usar si DelCatty se ve afectada por una condición especial.",
            it: "Una volta durante il tuo turno <em> (prima del tuo attacco) </em>, puoi scartare 1 carta energetica dalla tua mano.  Quindi disegna fino a 3 carte dal tuo mazzo.  Questa potenza non può essere utilizzata se Delcatty è influenzata da una condizione speciale.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, você pode descartar 1 cartão de energia da sua mão.  Em seguida, desenhe até 3 cartas do seu baralho.  Esse poder não pode ser usado se Delcatty for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Max Energy Source",
            ja: "最大エネルギー源",
            fr: "Source d'énergie maximale",
            de: "Maxe Energiequelle",
            es: "Fuente de energía máxima",
            it: "Fonte di energia massima",
            pt: "Fonte de energia máxima",
          },
          effect: {
            en: "Does 10 damage times the amount of Energy attached to all of your Active Pokemon.",
            ja: "アクティブなポケモンのすべてに取り付けられたエネルギーの量を10回ダメージします。",
            fr: "Fait 10 dégâts fois la quantité d'énergie attachée à tous vos pokémon actifs.",
            de: "Schädigt 10 Mal die Energiemenge, die an all Ihren aktiven Pokémon verbunden ist.",
            es: "Hace 10 tiempos de daño la cantidad de energía unida a todos sus Pokémon activos.",
            it: "Fa 10 danni volte la quantità di energia collegata a tutti i pokemon attivi.",
            pt: "10 danos vezes a quantidade de energia ligada a todos os seus Pokémon ativos.",
          },
        },
      ],

      retreat: 1,

};

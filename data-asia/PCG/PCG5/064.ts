import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Spinda",
         ja: "スピンダ",
         fr: "Spinda",
         de: "Spinda",
         es: "Spinda",
         it: "Spinda",
         pt: "Spinda",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [327],
      hp: 60,
      types: ["Colorless"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Pattern Distraction",
            ja: "パターンの気晴らし",
            fr: "Distraction du modèle",
            de: "Musterablenkung",
            es: "Distracción de patrones",
            it: "Distrazione del modello",
            pt: "Distração de padrões",
          },
          effect: {
            en: "As long as Spinda is your Active PokÃ©mon, whenever your opponent's Basic PokÃ©mon tries to attack, your opponent flips a coin. If tails, that attack does nothing. You can't use more than 1 Pattern Distraction PokÃ©-Body each turn.",
            ja: "Spindaがあなたのアクティブなポカモンである限り、相手の基本的なPokã©Monが攻撃を試みるたびに、相手はコインをひっくり返します。尾の場合、その攻撃は何もしません。 1つ以上のパターンの注意散漫Pokã©-Body各ターンを使用することはできません。",
            fr: "Tant que Spinda est votre poké actif, chaque fois que le poké de base de votre adversaire essaie d'attaquer, votre adversaire retourne une pièce. If tails, that attack does nothing. Vous ne pouvez pas utiliser plus d'un modèle de distraction de motif Pokã © -Body à chaque tour.",
            de: "Solange Spinda Ihr aktiver Pokémon ist, wenn der grundlegende Poké Mons Ihres Gegners angreifen versucht, dreht Ihr Gegner eine Münze um. Wenn Schwänze, tut dieser Angriff nichts. Sie können in jeder Runde nicht mehr als 1 Muster-Ablenkung verwenden.",
            es: "Mientras Spinda sea tu Poké Mon activo, cada vez que el Poké Mon básico de tu oponente intenta atacar, tu oponente voltea una moneda. Si Tails, ese ataque no hace nada. No puede usar más de 1 patrón de distracción Poké-cuerpo en cada giro.",
            it: "Finché Spinda è il tuo poké attivo, ogni volta che il poké di base del tuo avversario cerca di attaccare, il tuo avversario lancia una moneta. Se la coda, quell'attacco non fa nulla. Non puoi usare più di 1 pattern Distrazione Pokã © -body ogni turno.",
            pt: "Enquanto Spinda for o seu Poké Mon ativo, sempre que o Poké Mon Basic Mon do seu oponente tenta atacar, seu oponente vira uma moeda. Se caudas, esse ataque não faz nada. Você não pode usar mais de 1 distração de padrões Poké-corpo a cada turno.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Whimsy Draw",
            ja: "気まぐれなドロー",
            fr: "Privoi de fantaisie",
            de: "Laune",
            es: "Sorteo",
            it: "Pareggio",
            pt: "Empate caprichoso",
          },
          effect: {
            en: "Flip a coin until you get tails. For each heads, draw 2 cards.",
            ja: "尾がなくなるまでコインをひっくり返します。各ヘッドについて、2枚のカードを描きます。",
            fr: "Retournez une pièce jusqu'à ce que vous obteniez la queue. Pour chaque tête, dessinez 2 cartes.",
            de: "Drehen Sie eine Münze um, bis Sie Schwänze bekommen. Zeichnen Sie für jeden Köpfe 2 Karten.",
            es: "Voltea una moneda hasta que obtengas colas. Para cada cabezal, dibuje 2 cartas.",
            it: "Capovolgi una moneta fino a quando non ricevi la coda. Per ogni testa, disegna 2 carte.",
            pt: "Vire uma moeda até obter caudas. Para cada cabeça, desenhe 2 cartas.",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Double-edge",
            ja: "ダブルエッジ",
            fr: "À double bord",
            de: "Doppelkante",
            es: "De doble borde",
            it: "Doppio bordo",
            pt: "Dupla borda",
          },
          effect: {
            en: "Flip a coin. If tails, Spinda does 10 damage to itself.",
            ja: "コインをひっくり返します。尾の場合、Spindaはそれ自体に10ダメージを与えます。",
            fr: "Retourner une pièce. Si Tails, Spinda se fait 10 dégâts.",
            de: "Eine Münze drehen. Wenn Schwänze, spinda schädigt sich 10.",
            es: "Voltea una moneda. Si Tails, Spinda hace 10 daños a sí mismo.",
            it: "Capovolgi una moneta. Se code, Spinda fa 10 danni a se stessa.",
            pt: "Vire uma moeda. Se caudas, Spinda causa 10 danos a si mesmo.",
          },
          damage: 30,
        },
      ],

      retreat: 1,

      variants: [
        {
  type: "normal",
  subtype: 'unlimited",
}
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};

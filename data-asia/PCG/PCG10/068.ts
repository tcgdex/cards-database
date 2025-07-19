import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
      set: Set,
      name: {
         en: "Metagross ex",
         ja: "Metagross Ex",
         fr: "Metagross ex",
         de: "Metagross ex",
         es: "Metagross ex",
         it: "Metagross Ex",
         pt: "Metagross Ex",
      },


      category: "Pokemon",
      dexId: [376],
      hp: 150,
      types: ["Metal"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Magnetic Redraw",
            ja: "磁気再描画",
            fr: "Redessiner magnétique",
            de: "Magnetisches Neuausfall",
            es: "Redibujado magnético",
            it: "Redraw magnetico",
            pt: "Redraws magnética",
          },
          effect: {
            en: "Once during your turn (before your attack), if Metagross ex is your Active PokÃ©mon, you may use this power. Each player shuffles his or her hand into his or her deck. Then, each player draws 4 cards. This power can't be used if Metagross ex is affected by a Special Condition.",
            ja: "ターン中（攻撃の前）に一度、Metagross ExがアクティブなPokã©Monである場合、このパワーを使用できます。各プレイヤーは自分の手をデッキにシャッフルします。次に、各プレイヤーが4枚のカードを描きます。 Metagross Exが特別な状態の影響を受ける場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour (avant votre attaque), si Metagross Ex est votre poké actif, vous pouvez utiliser cette puissance. Chaque joueur mélange sa main dans son deck. Ensuite, chaque joueur tire 4 cartes. Cette puissance ne peut pas être utilisée si Metagross Ex est affecté par une condition spéciale.",
            de: "Sobald Sie während Ihres Zuges (vor Ihrem Angriff), wenn Metagross ex Ihr aktiver Poké Mon Mon Mon ist, können Sie diese Kraft verwenden. Jeder Spieler mischt seine Hand in sein Deck. Dann zieht jeder Spieler 4 Karten. Diese Leistung kann nicht verwendet werden, wenn Metagross EX von einem besonderen Zustand betroffen ist.",
            es: "Una vez durante su turno (antes de su ataque), si Metagross ex es su Poké Mon activo, puede usar este poder. Cada jugador baraja su mano en su mazo. Luego, cada jugador dibuja 4 cartas. Esta potencia no se puede usar si Metagross EX se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno (prima dell'attacco), se MetaGross ex è il tuo poké attivo, puoi usare questo potere. Ogni giocatore mescola la mano nel suo mazzo. Quindi, ogni giocatore disegna 4 carte. Questa potenza non può essere utilizzata se MetaGross Ex è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), se o Metagross Ex for o seu Poké de Mon ativo, você poderá usar esse poder. Cada jogador embaralha a mão em seu deck dele ou dela. Então, cada jogador desenha 4 cartas. Esse poder não pode ser usado se o Metagross EX for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Metal", "Metal", "Colorless"],
          name: {
            en: "Scanblast",
            ja: "スキャンブラスト",
            fr: "Scanblast",
            de: "Scanblast",
            es: "Escanear",
            it: "Scanblast",
            pt: "ScanBlast",
          },
          effect: {
            en: "Does 70 damage to each of your opponent's Benched Pokemon that has the same name as the Defending Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "防御ポケモンと同じ名前を持つ相手のベンチ付きポケモンのそれぞれに70のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Conne 70 dégâts à chacun des Pokémon bancés de votre adversaire qui a le même nom que le Pokémon en défense. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Schädigt 70 Schäden an den Bankpokémon Ihres Gegners, die den gleichen Namen wie das verteidigende Pokemon hat. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Hace 70 daños a cada Pokémon de banca de tu oponente que tiene el mismo nombre que el Pokémon defensor. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Fa 70 danni a ciascuno dei Pokemon in panchina del tuo avversario che ha lo stesso nome del Pokemon in carica. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Os 70 danos a cada um dos Pokémon bancos do seu oponente que têm o mesmo nome que o Pokémon defensor. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
          damage: 70,
        },
      ],

      retreat: 4,

      variants: [
        {
          type: "holo",
          subtype: "unlimited',
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};

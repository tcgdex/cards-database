import {Card} from "../../../interfaces"
import Set from "../PCG7"

const card: Card = {
      set: Set,
      name: {
         en: "Kingdra (Delta Species)",
         ja: "キングドラ（デルタ種）",
         fr: "Kingdra (espèce delta)",
         de: "Kingdra (Delta -Arten)",
         es: "Kingdra (especie delta)",
         it: "Kingdra (Delta Species)",
         pt: "Kingdra (espécie Delta)",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [230],
      hp: 110,
      types: ["Fire"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Dragon Curse",
            ja: "ドラゴンの呪い",
            fr: "Maudire",
            de: "Drachenfluch",
            es: "Maldición del dragón",
            it: "Dragon maledizione",
            pt: "Maldição do dragão",
          },
          effect: {
            en: "Once during your turn (before your attack), if Kingdra is your Active PokÃ©mon, you may put 2 damage counters on 1 of your opponent's PokÃ©mon with Delta on its card. This power can't be used if Kingdra is affected by a Special Condition.",
            ja: "ターン中（攻撃の前に）、KingdraがアクティブなPokã©Monである場合、カードにDeltaを使用した相手のPokã©Monの1つに2つのダメージカウンターを入れることができます。 Kingdraが特別な状態の影響を受けている場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour (avant votre attaque), si Kingdra est votre poké actif, vous pouvez mettre 2 compteurs de dégâts sur 1 des poké de votre adversaire avec Delta sur sa carte. Ce pouvoir ne peut pas être utilisé si Kingdra est affecté par une condition spéciale.",
            de: "Einmal während Ihres Zuges (vor Ihrem Angriff), wenn Kingdra Ihr aktiver Poké Mon Mon Mon ist, können Sie 2 Schadenszähler auf einen der Poké Mons Ihres Gegners mit Delta auf der Karte setzen. Diese Kraft kann nicht verwendet werden, wenn Kingdra von einem besonderen Zustand betroffen ist.",
            es: "Una vez durante su turno (antes de su ataque), si Kingdra es su Poké Mon activo, puede poner 2 contadores de daño en 1 de su oponente Poké Mon con Delta en su carta. Este poder no se puede usar si Kingdra se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno (prima del tuo attacco), se Kingdra è il tuo poké attivo, puoi mettere 2 contatori di danno su 1 del poké del tuo avversario con delta sulla sua carta. Questo potere non può essere usato se Kingdra è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), se Kingdra for o seu Poké ativo, você poderá colocar 2 contadores de danos em 1 do Poké Mon do seu oponente com o Delta em seu cartão. Esse poder não pode ser usado se Kingdra for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Fire", "Colorless"],
          name: {
            en: "Extra Flame",
            ja: "余分な炎",
            fr: "Flamme supplémentaire",
            de: "Zusätzliche Flamme",
            es: "Llama extra",
            it: "Fiamma extra",
            pt: "Chama extra",
          },
          effect: {
            en: "If the Defending Pokemon is Pokemon-ex, this attack does 30 damage plus 30 more damage.",
            ja: "防御ポケモンがポケモンエクスの場合、この攻撃は30ダメージに加えて30ダメージを与えます。",
            fr: "Si le Pokémon en défense est Pokemon-EX, cette attaque fait 30 dégâts plus 30 dégâts supplémentaires.",
            de: "Wenn das verteidigende Pokemon Pokemon-EX ist, verursacht dieser Angriff 30 Schaden zuzüglich 30 weitere Schäden.",
            es: "Si el Pokémon defensor es Pokémon-EX, este ataque hace 30 daños más 30 más de daño.",
            it: "Se il Pokemon in carica è Pokemon-Ex, questo attacco infligge 30 danni più 30 danni.",
            pt: "Se o pokemon atual for Pokemon-Ex, esse ataque causará 30 danos mais 30 mais danos.",
          },
        },
        {
          cost: ["Fire", "Metal", "Colorless", "Colorless"],
          name: {
            en: "Heat Blast",
            ja: "ヒートブラスト",
            fr: "Explosion de chaleur",
            de: "Hitzeexplosion",
            es: "Explosión de calor",
            it: "Blast di calore",
            pt: "Explosão de calor",
          },
          damage: 80,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};

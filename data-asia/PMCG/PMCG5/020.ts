import {Card} from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Rocket's Moltres",
         ja: "ロケットのモルト",
         fr: "Moltres de Rocket",
         de: "Rocket's Moltres",
         es: "Moltres de cohete",
         it: "Moltres di Rocket",
         pt: "Moltres do foguete",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [146],
      hp: 60,
      types: ["Fire"],
      stage: "Stage1",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Rebirth",
            ja: "再生",
            fr: "Renaissance",
            de: "Wiedergeburt",
            es: "Renacimiento",
            it: "Rinascita",
            pt: "Renascimento",
          },
          effect: {
            en: "Whenever Rocket's Moltres is Knocked Out, you may return it to your hand after discarding it. This power can't be used if Rocket's Moltres is Asleep, Confused, or Paralyzed when it is Knocked Out.",
            ja: "ロケットのモルトがノックアウトされるたびに、それを捨てた後、あなたはそれを手に戻すことができます。ロケットのモルトが眠っている場合、それがノックアウトされたときに眠ったり、混乱したり、麻痺したりした場合、このパワーは使用できません。",
            fr: "Chaque fois que Moltres de Rocket est éliminé, vous pouvez le retourner à votre main après l'avoir jeté. Ce pouvoir ne peut pas être utilisé si Rocket's Moltres est endormi, confus ou paralysé lorsqu'il est éliminé.",
            de: "Immer wenn Rockets Moltres ausgeschaltet wird, können Sie es nach dem Verwerfen in Ihre Hand zurückgeben. Diese Kraft kann nicht verwendet werden, wenn Rockets Moltres schläft, verwirrt oder gelähmt ist, wenn sie ausgeschlagen wird.",
            es: "Cada vez que los Moltres de Rocket se eliminan, puede devolverlo a su mano después de descartarlo. Este poder no se puede usar si los Moltres de Rocket están dormidos, confundidos o paralizados cuando se elimina.",
            it: "Ogni volta che i Moltres di Rocket vengono eliminati, puoi restituirlo in mano dopo averlo scartato. Questo potere non può essere usato se i moltres di Rocket sono addormentati, confusi o paralizzati quando viene eliminato.",
            pt: "Sempre que o Moltres do Rocket é nocauteado, você pode devolvê -lo à sua mão depois de descartá -lo. Esse poder não pode ser usado se o Moltres do Rocket estiver dormindo, confuso ou paralisado quando for nocauteado.",
          },
      }],

      attacks: [
        {
          cost: ["Fire", "Fire", "Fire"],
          name: {
            en: "Fire Wall",
            ja: "火の壁",
            fr: "Mur de feu",
            de: "Feuerwand",
            es: "Muro de fuego",
            it: "Parete del fuoco",
            pt: "Parede de fogo",
          },
          effect: {
            en: "If an attack does damage to Rocket's Moltres during your opponent's next turn (even if Rocket's Moltres is Knocked Out), Rocket's Moltres attacks your opponent's Active Pokemon for 10 damage. (Apply Weakness and Resistance.)",
            ja: "攻撃が相手の次のターン中にロケットのモルトのダメージを与えた場合（ロケットのモルトがノックアウトされたとしても）、ロケットのモルトレスは相手のアクティブなポケモンを10ダメージで攻撃します。 （衰弱と抵抗を適用します。）",
            fr: "Si une attaque endommage les Moltres de Rocket lors du prochain virage de votre adversaire (même si Moltres de Rocket est éliminé), Moltres de Rocket attaque le pokemon actif de votre adversaire pour 10 dégâts. (Appliquer la faiblesse et la résistance.)",
            de: "Wenn ein Angriff in der nächsten Kurve Ihres Gegners Schäden an Rocket's Moltres schädigt (auch wenn Rocket's Moltres ausgeschaltet wird), greift Rocket's Moltres das aktive Pokémon Ihres Gegners für 10 Schäden an. (Schwäche und Widerstand auftragen.)",
            es: "Si un ataque da daño a los Moltres de Rocket durante el próximo turno de tu oponente (incluso si los Moltres de Rocket se eliminan), Moltres de Rocket ataca al Pokémon activo de tu oponente por 10 daños. (Aplicar debilidad y resistencia).",
            it: "Se un attacco fa danni ai Moltres di Rocket durante la prossima svolta del tuo avversario (anche se i Moltres di Rocket vengono eliminati), i Moltres di Rocket attaccano il Pokemon attivo del tuo avversario per 10 danni. (Applicare debolezza e resistenza.)",
            pt: "Se um ataque causar danos aos Moltres do Rocket durante o próximo turno do seu oponente (mesmo que o Moltres do Rocket seja nocauteado), o Moltres do Rocket ataca o Pokémon ativo do seu oponente por 10 danos. (Aplique fraqueza e resistência.)",
          },
          damage: 40,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
        },
      ],
};

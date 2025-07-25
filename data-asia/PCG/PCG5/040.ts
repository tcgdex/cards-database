import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Gengar",
         ja: "ジェンガー",
         fr: "Gengar",
         de: "Gengar",
         es: "Gengar",
         it: "Gengar",
         pt: "Gengar",
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
            en: "Shadow Curse",
            ja: "影の呪い",
            fr: "Malédiction de l'ombre",
            de: "Schattenfluch",
            es: "Maldición de la sombra",
            it: "Maledizione dell'ombra",
            pt: "Maldição da sombra",
          },
          effect: {
            en: "If Gengar would be Knocked Out by damage from an opponent's attack, you may put 3 damage counters on 1 of your opponent's PokÃ©mon.",
            ja: "Gengarが相手の攻撃によるダメージによってノックアウトされる場合、相手のPokã©Monの1つに3つのダメージカウンターを入れることができます。",
            fr: "Si Gengar était assommé par les dommages de l'attaque d'un adversaire, vous pouvez mettre 3 compteurs de dégâts sur 1 des poké de votre adversaire.",
            de: "Wenn Gengar durch Schäden durch den Angriff eines Gegners ausgeschaltet wird, können Sie 3 Schadenszähler auf einen der Poké Mons Ihres Gegners aufstellen.",
            es: "Si Gengar fuera noqueado por el daño del ataque de un oponente, puede poner 3 contadores de daño en 1 de los Poké de su oponente.",
            it: "Se Gengar fosse eliminato dal danno da un attacco di un avversario, è possibile mettere 3 contatori di danno su 1 del poké del tuo avversario.",
            pt: "Se Gengar seria nocauteado por danos causados pelo ataque de um oponente, você poderá colocar três contadores de danos em 1 dos Poké -Mon do seu oponente.",
          },
      }],

      attacks: [
        {
          cost: ["Psychic"],
          name: {
            en: "Cursed Reaction",
            ja: "呪われた反応",
            fr: "Réaction maudite",
            de: "Verfluchte Reaktion",
            es: "Reacción maldita",
            it: "Reazione maledetta",
            pt: "Reação amaldiçoada",
          },
          effect: {
            en: "Put 2 damage counters on your opponent's Pokemon in any way you like. If Gengar has any React Energy cards attached to it, put 4 damage counters instead.",
            ja: "相手のポケモンに2つのダメージカウンターを、好きなように配置します。 GengarにはReact Energy Cardが接続されている場合は、代わりに4つのダメージカウンターを入れます。",
            fr: "Mettez 2 compteurs de dégâts sur le pokemon de votre adversaire de quelque manière que ce soit. Si Gengar a des cartes d'énergie React attachées, mettez à la place 4 compteurs de dégâts.",
            de: "Setzen Sie 2 Schadenszähler auf das Pokémon Ihres Gegners auf eine Weise, die Sie möchten. Wenn Gengar React Energy -Karten daran befestigt ist, setzen Sie stattdessen 4 Schadenszähler an.",
            es: "Pon 2 contadores de daño en el Pokémon de tu oponente de la manera que quieras. Si Gengar tiene alguna tarjetas de energía reaccionadas unidas, coloque 4 contadores de daño.",
            it: "Metti 2 contatori di danno sul Pokemon del tuo avversario in ogni modo che desideri. Se Gengar ha delle carte di energia react attaccate ad esso, inserisci invece 4 contatori di danno.",
            pt: "Coloque 2 contadores de danos no Pokémon do seu oponente da maneira que desejar. Se a Gengar tiver algum cartão de energia do React anexado a ele, coloque 4 contadores de danos.",
          },
        },
        {
          cost: ["Psychic", "Psychic", "Colorless"],
          name: {
            en: "Super Psy Bolt",
            ja: "スーパーPSYボルト",
            fr: "Boulon super psy",
            de: "Super Psy Bolt",
            es: "Super Psy Bolt",
            it: "Super Psy Bolt",
            pt: "Super Psy Bolt",
          },
          damage: 60,
        },
      ],

      retreat: 1,

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

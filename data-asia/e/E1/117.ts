import {Card} from "../../../interfaces"
import Set from "../E1"

const card: Card = {
      set: Set,
      name: {
         en: "Gengar - 117/128",
         ja: "Gengar -117/128",
         fr: "Gengar - 117/128",
         de: "Gengar - 117/128",
         es: "Gengar - 117/128",
         it: "Gengar - 117/128",
         pt: "Gengar - 117/128",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [94],
      hp: 90,
      types: ["Psychic"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Chaos Move",
            ja: "カオスは動きます",
            fr: "Chaos bouge",
            de: "Chaos bewegen sich",
            es: "Movimiento del caos",
            it: "Il caos si muove",
            pt: "Caos se move",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, if your opponent has 3 or fewer Prizes, you may move 1 damage counter from 1 Pokmon <em>(yours or your opponent's)</em> to another <em>(even if it would Knock Out the other Pokmon)</em>. This power can't be used if Gengar is affected by a Special Condition.",
            ja: "ターン中に（攻撃の前に）</em> </em>、相手が3つ以下の賞品を持っている場合、1ポクモン<em>（あなたまたは相手）から1ダメージカウンターを別の<em>に移動することができます（他のPokmonをノックアウトしても）</em>。 Gengarが特別な状態の影響を受けている場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </em>, si votre adversaire a 3 prix ou moins, vous pouvez déplacer 1 compteur de dégâts à 1 Pokmon <em> (le vôtre ou celui de votre adversaire) </em> à un autre <em> (même si cela éliminerait l'autre Pokmon) </em>. Ce pouvoir ne peut pas être utilisé si Gengar est affecté par une condition spéciale.",
            de: "Sobald Sie während Ihres Zuges <em> (vor Ihrem Angriff) </em>, wenn Ihr Gegner 3 oder weniger Preise hat, können Sie 1 Schadenschalter von 1 Pokmon <em> (Ihr oder Ihr Gegner) in ein anderes <em> verschieben (auch wenn es das andere Pokmon ausschalten würde) </em>. Diese Kraft kann nicht verwendet werden, wenn Gengar von einem besonderen Zustand betroffen ist.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, si su oponente tiene 3 o menos premios, puede mover 1 contador de daño de 1 Pokmon <em> (tuyo o de su oponente) </em> a otro <em> (incluso si noquea al otro Pokmon) </em>. Esta potencia no se puede usar si Gengar se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno <em> (prima del tuo attacco) </em>, se il tuo avversario ha 3 o meno premi, puoi spostare 1 contatore di danni da 1 Pokmon <em> (il tuo o il tuo avversario) </em> a un altro <em> (anche se eliminerebbe l'altro Pokmon) </em>. Questo potere non può essere usato se Gengar è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, se o seu oponente tiver 3 ou menos prêmios, você poderá mover 1 contador de danos de 1 Pokmon <em> (seu ou seu oponente) </em> para outro <em> (mesmo que nocauteie o outro Pokmon) </em>. Esse poder não pode ser usado se Gengar for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Psychic", "Psychic", "Colorless"],
          name: {
            en: "Hide in Shadows",
            ja: "影を隠します",
            fr: "Cacher dans les ombres",
            de: "Verstecken Sie sich in Schatten",
            es: "Esconderse",
            it: "Nascondersi nelle ombre",
            pt: "Esconda -se em sombras",
          },
          effect: {
            en: "Switch Gengar with 1 of your Benched Pokemon, if any.",
            ja: "ベンチ付きポケモンの1つを使用してGengarを切り替えます。",
            fr: "Changez Gengar avec 1 de votre pokemon banc, le cas échéant.",
            de: "Wechseln Sie Gengar mit 1 Ihrer Bank -Pokemon, falls vorhanden.",
            es: "Cambie Gengar con 1 de su Pokémon de banca, si lo hay.",
            it: "Cambia Gengar con 1 del tuo Pokemon in panchina, se presente.",
            pt: "Mudar o Gengar com 1 do seu Pokémon em banco, se houver.",
          },
          damage: 40,
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

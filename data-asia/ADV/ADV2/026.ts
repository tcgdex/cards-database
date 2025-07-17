import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
         en: "Xatu",
         ja: "xatu",
         fr: "Xatu",
         de: "Xatu",
         es: "Xatu",
         it: "Xatu",
         pt: "Xatu",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [178],
      hp: 70,
      types: ["Psychic"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Healing Wind",
            ja: "癒しの風",
            fr: "Vent de guérison",
            de: "Heilender Wind",
            es: "Viento curativo",
            it: "Vento di guarigione",
            pt: "Vento de cura",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, you may remove 1 damage counter from each of your Active Pokémon. This power can't be used if Xatu is affected by a Special Condition.",
            ja: "順番<em>（攻撃の前）</em>中に、アクティブなポケモンのそれぞれから1つのダメージカウンターを削除できます。 Xatuが特別な状態の影響を受けている場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </em>, vous pouvez supprimer 1 compteur de dégâts de chacun de vos Pokémon actifs. Cette puissance ne peut pas être utilisée si Xatu est affecté par une condition spéciale.",
            de: "Sobald Sie in Ihrem Zug <em> (vor Ihrem Angriff) </em> sind, können Sie 1 Schadenschalter von jedem Ihrer aktiven Pokémon entfernen. Diese Leistung kann nicht verwendet werden, wenn Xatu von einem besonderen Zustand betroffen ist.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, puede eliminar 1 contador de daño de cada uno de sus Pokémon activos. Esta potencia no se puede usar si Xatu se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno <em> (prima dell'attacco) </em>, puoi rimuovere 1 contatore di danni da ciascuno dei tuoi Pokémon attivi. Questa potenza non può essere utilizzata se Xatu è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, você pode remover 1 contador de danos de cada um dos seus Pokémon ativos. Esse poder não pode ser usado se o Xatu for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Psychic", "Colorless"],
          name: {
            en: "Psyimpact",
            ja: "psyimpact",
            fr: "Pyimpact",
            de: "Psyimpact",
            es: "Psíquico",
            it: "Psyimpact",
            pt: "Psyimpact",
          },
          effect: {
            en: "Put 1 damage counter on each of your opponent's Pokemon.",
            ja: "相手のポケモンのそれぞれに1つのダメージカウンターを置きます。",
            fr: "Mettez 1 compteur de dégâts sur chacun des Pokémon de votre adversaire.",
            de: "Legen Sie 1 Schadenschalter auf das Pokémon Ihres Gegners.",
            es: "Pon 1 mostrador de daño en cada Pokémon de tu oponente.",
            it: "Metti 1 contatore di danni su ciascuno dei Pokemon del tuo avversario.",
            pt: "Coloque 1 contador de danos em cada um dos Pokémon do seu oponente.",
          },
        },
      ],


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
